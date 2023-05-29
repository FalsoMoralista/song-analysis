import Head from "next/head";
import Layout from "../components/layout";
import { Container } from "@mui/material";
import CoverImage from "../components/cover-image";
import Intro from "../components/intro";
import axios from "axios";
import { useState } from "react";

export type AnalysisResponse = {
    content: Analysis;
}  

export type Analysis = {
    entropy: number;
    avg: number; 
}

export default function AnalyzeMySong(){
    const [artist, setArtist] = useState(''); 
    const [song_title, setSongTitle] = useState(''); 
    const [release_date, setReleaseDate] = useState(''); 
    const [lyrics, setLyrics] = useState(''); 
    const def: AnalysisResponse = {content:{entropy:0, avg:0}}
    const [analysisResponse, setAnalysisResponse] = useState<Analysis>(def.content);    

    const submit = async () => {

        if (artist === ""){
            alert("Please fill the form arstist name field");
            return;
        }else if (song_title === ""){
            alert("Please fill the form song title field");
            return;
        }else if (release_date === ""){
            alert("Please fill the form relase year field");
            return;
        }else if (lyrics === ""){
            alert("Please fill the form song lyrics field");
            return;
        }else{
            const { data } = await axios.post<AnalysisResponse>(
                "https://my-song-entropy-xg7jaquagq-rj.a.run.app/",
                {
                  artist: artist,
                  song_title: song_title,
                  release_date: release_date,
                  lyrics: lyrics
                }
            );
            setAnalysisResponse(data.content);
        }
    
        //setSongs(data.content);
        //setFilteredSongs(data.content);
        //setFetched(true);
        //console.log("DATA", data);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        submit()
    };

    return (
        <Layout>
            <Head><title>{`Analyze My Song`}</title></Head>

            <Container>
            <Intro title="Analyze My Song"> </Intro>
            <div className="mb-8 md:mb-12">
                <CoverImage title={"teste"} src={"/assets/blog/dynamic-routing/cover1.jpg"} slug={"imageLink"} />
            </div>
            <form>
                <div className="lg:text-xl">
                    Song Name:
                    <input type="text" onChange={(e) => setSongTitle(e.target.value)} className="border-2 mt-1 mb-8 ml-24 w-4/6 px-2 h-14 border-slate-800 rounded "  placeholder={"Enter a song name"}/>
                </div>
                
                <div className="lg:text-xl">
                    Artist:
                    <input type="text" onChange={(e) => setArtist(e.target.value)} className="border-2 mt-4 mb-8 ml-40 w-4/6 px-2 h-14 border-slate-800 rounded "  placeholder={"Enter an artist name"}/>
                </div>

                <div className="lg:text-xl">
                    Release Date:
                    <input type="text" onChange={(e) => setReleaseDate(e.target.value)} className="border-2 mt-4 mb-8 ml-24 w-4/6 px-2 h-14 border-slate-800 rounded "  placeholder={"Enter the release date"}/>
                </div>
                                 
                <div className="lg:text-xl pb-10 ml-14 ">
                    <div className="-ml-14 mt-4 mr-20">Lyrics:</div>
                    <textarea onChange={(e) => setLyrics(e.target.value)} className="border-2 -mt-10 mb-8  ml-40 w-4/6 pl-2 pt-2 h-60 border-slate-800 rounded "  placeholder={"Enter the lyrics"}/>
                    <button
                        id="submitButton"
                        onClick={handleSubmit}
                        className="mt-8 ml-8 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >Submit
                    </button>
                </div>
                <div className="lg:text-7xl">
                    Song Statistics:
                    <div className="mt-2 lg:text-2xl">
                        Information Content: {analysisResponse.entropy.toFixed(2)} bits.
                    </div>
                    <div className="mt-2 lg:text-2xl mb-40">
                        Your song has {analysisResponse.avg.toFixed(2)} times more information than the other songs in the database.
                    </div>
                </div>
                
            </form>
            </Container>
        </Layout>
    );
}
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Intro from "../components/intro";
import PostBody from "../components/post-body";
import { Component, useState } from "react";
import Song, { SongResponse, SongStats, SongStatsResponse } from "../interfaces/song";
import axios from "axios";
import { YearInputs } from "../components/YearInputs";
import BarChart from "../components/barchart";

export default function Statistics(){

    const [minYearSelected, setMinYearSelected] = useState(null);
    const [maxYearSelected, setMaxYearSelected] = useState(null);

    const [songStats, setSongStats] = useState<SongStats[]>([]);
    
    const [dataProp, setDataProp] = useState<number[]>([]);
    const [labelsProp, setLabelsProp] = useState<string[]>([]);

    const fetchSongs = async () => {     
        let t : number = 2;

        const { data } = await axios.post<SongStatsResponse>(
            "https://split-by-interval-xg7jaquagq-rj.a.run.app",
            {
                resource: "get_average_lexical_complexity",
                min: minYearSelected,
                max: maxYearSelected,   
                timestamp: t
            }
        );        
        setSongStats(data.content);
        const d : number[] = [];
        const s : string[] = [];
        for (const key of Object.keys(data.content)){
            s.push(key);
            d.push(data.content[key]);
        }
        setDataProp(d);
        setLabelsProp(s);
        console.log(dataProp);
    };

    const content = `
        This section allows to given a time interval, e.g., between 1950 and 1960, visualizing the average complexity measure that can either be the Entropy or Lexical Richness. 
        This way we can analyze the songs complexity throughout the years. 
    `;
        
    return (
        <Layout >
            <Head><title>{`Song Statistics`}</title> </Head>
            <Container> 
            <Intro title="Songs Statistics"> </Intro>
            <PostBody content={content}></PostBody>
            <YearInputs
                onSubmit={fetchSongs}
                maxYear={maxYearSelected}
                minYear={minYearSelected}
                onMaxYearChange={setMaxYearSelected}
                onMinYearChange={setMinYearSelected}
            />
            <Container>
                <BarChart labelsProp={labelsProp} dataProp={dataProp}></BarChart>
            </Container>
            </Container>
        </Layout>
    )
}
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
import SplitSlider from "../components/splitSlider";
import Header from "../components/header";

export default function Statistics(){
    const [selectedMeasure, setSelectedMeasure] = useState(null);
    const [minYearSelected, setMinYearSelected] = useState(null);
    const [maxYearSelected, setMaxYearSelected] = useState(null);
    const [splitLength, setsplitLength] = useState(null);

    const [songStats, setSongStats] = useState<SongStats[]>([]);
    
    const [dataProp, setDataProp] = useState<number[]>([]);
    const [labelsProp, setLabelsProp] = useState<string[]>([]);

    const fetchSongs = async () => {     

        let src: string = '';
        if (selectedMeasure === null){
            alert("Select a measure");
            return;
        }else if (selectedMeasure === 0){
            src = "get_average_lexical_complexity";
        }else{
            src = "get_average_entropy";
        }
        const { data } = await axios.post<SongStatsResponse>(
            "https://split-by-interval-xg7jaquagq-rj.a.run.app",
            {
                resource: src,
                min: minYearSelected,
                max: maxYearSelected,   
                timestamp: splitLength  
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
        //console.log(dataProp);
    };
        
    return (
        <Layout >
            <Head><title>{`Song Statistics`}</title> </Head>
            <Container>     
              <Header></Header>
              <Intro title="Songs Statistics"> </Intro>
              <div className="pl-60">
                <div>
                  <YearInputs
                    onSubmit={fetchSongs}
                    maxYear={maxYearSelected}
                    minYear={minYearSelected}
                    onMaxYearChange={setMaxYearSelected}
                    onMinYearChange={setMinYearSelected}
                    onSelectionChange={setSelectedMeasure}
                    selectedMeasure={selectedMeasure}
                  />
                </div>
                <div className="text-lg pl-4 pt-4 pb-6">
                  Year Split :
                  <SplitSlider setSplitLenght={setsplitLength}/>
                </div>
              </div>
            <Container>
              <div className="pb-12">
                <BarChart labelsProp={labelsProp} dataProp={dataProp} selectedMeasure={selectedMeasure}></BarChart>
              </div>
              <div className="text-lg pb-40">
              </div>
            </Container>
            </Container>
        </Layout>
    )
}
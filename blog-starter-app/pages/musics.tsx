import Head from "next/head";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Container from "../components/container";
import { YearInputs } from "../components/YearInputs";
import { useState } from "react";
import axios from "axios";
import { Music, MusicResponse } from "../interfaces/music";
import MusicCard from "../components/music";

export default function Musics() {
  const [minYearSelected, setMinYearSelected] = useState(null);
  const [maxYearSelected, setMaxYearSelected] = useState(null);

  const [musics, setMusics] = useState<Music[]>([]);

  const fetchMusics = async () => {
    if (!minYearSelected) {
      return alert("Type a min year");
    }

    const { data } = await axios.post<MusicResponse>(
      "https://get-songs-from-interval-xg7jaquagq-tl.a.run.app/",
      {
        resource: "get_songs_from_interval",
        min: minYearSelected,
        max: maxYearSelected,
      }
    );

    setMusics(data.content);

    console.log("DATA", data);
  };

  return (
    <Layout>
      <Head>
        <title>{`Musics`}</title>
      </Head>
      <Container>
        <Intro title="My musics">A screen to see all my musics</Intro>
        <YearInputs
          onSubmit={fetchMusics}
          maxYear={maxYearSelected}
          minYear={minYearSelected}
          onMaxYearChange={setMaxYearSelected}
          onMinYearChange={setMinYearSelected}
        />

        {musics.map((music) => (
          <MusicCard music={music} />
        ))}
      </Container>
    </Layout>
  );
}

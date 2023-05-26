import Head from "next/head";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Container from "../components/container";
import { YearInputs } from "../components/YearInputs";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { Song, SongResponse } from "../interfaces/song";
import MusicCard from "../components/songCard";
import { SearchBar } from "../components/searchBar";


export default function Musics() {
  const [minYearSelected, setMinYearSelected] = useState(null);
  const [maxYearSelected, setMaxYearSelected] = useState(null);

  const [songs, setSongs] = useState<(Song)[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const [queryString, setQueryString] = useState('');


  const fetchMusics = async () => {
    if (!minYearSelected) {
      return alert("Type a min year");
    }

    const { data } = await axios.post<SongResponse>(
      "https://get-songs-from-interval-xg7jaquagq-tl.a.run.app/",
      {
        resource: "get_songs_from_interval",
        min: minYearSelected,
        max: maxYearSelected,
      }
    );

    setSongs((data.content as Song[]));
    setFilteredSongs((data.content as Song[]));

    console.log("DATA", data);
  };

  return (
    <Layout>
      <Head>
        <title>{`Song Dataset`}</title>
      </Head>
      <Container>
        <Intro title="Songs Available">Remove this text</Intro>
        <YearInputs
          onSubmit={fetchMusics}
          maxYear={maxYearSelected}
          minYear={minYearSelected}
          onMaxYearChange={setMaxYearSelected}
          onMinYearChange={setMinYearSelected}
        />        
        <SearchBar
         onQueryStringChange={(query) => {
          let updatedSongs: Song[] = [];
          for (const song of songs){
            if (!(song.song_title.toLowerCase().indexOf(query.toLowerCase()) === -1) || !(song.artist.indexOf(query.toLowerCase()) === -1)){
              updatedSongs.push(song);
            }
          }
          setFilteredSongs(updatedSongs);
         }}
         queryString="Search..."
        />

        {filteredSongs.map((song) => ( 
          <MusicCard song={song} />
        ))}
      </Container>
    </Layout>
  );
}

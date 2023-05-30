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
import Header from "../components/header";


export default function Songs() {

  const [songs, setSongs] = useState<(Song)[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [fetched, setFetched] = useState(null);
  const [queryString, setQueryString] = useState('');

  
  const fetchSongs = async () => {
    const { data } = await axios.post<SongResponse>(
      "https://get-songs-from-interval-xg7jaquagq-tl.a.run.app/",
      {
        resource: "get_songs_from_interval",
        min: 1950,
        max: 2010,
      }
    );

    setSongs(data.content);
    setFilteredSongs(data.content);
    setFetched(true);
    console.log("DATA", data);
  };
  if (!(fetched)){
    fetchSongs();
  }
  return (
    <Layout>
      <Head>
        <title>{`Song Dataset`}</title>
      </Head>
      <Container>
        <Header></Header>
        <Intro title="Songs Available"> </Intro>
       
        <SearchBar
          onQueryStringChange={(query) => {
            let updatedSongs: Song[] = [];
            for (const song of songs){
              // .toString().toLowerCase().indexOf(filterText.toLowerCase()
              if (!(song.artist.toLowerCase().indexOf(query.toLowerCase()) === -1) || !(song.song_title.toLowerCase().indexOf(query.toLowerCase()) === -1)){
                updatedSongs.push(song); // Not working
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

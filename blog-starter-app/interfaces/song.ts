export type Song = {
  song_title: string;
  artist: string;
  release_date: number;
  rank_position: number;
  lexical_richness_score: number;
  mxm_dataset_ID: string;
  bag_of_words: (number | string)[][]; //to-do: remove
};

export type SongStats = {
  period: string,
  measure: number
}

export type SongResponse = {
  content: (Song | SongStats)[] ;
};

export default Song;
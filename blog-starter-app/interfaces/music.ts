export type Music = {
  song_title: string;
  artist: string;
  release_date: number;
  rank_position: number;
  lexical_richness_score: number;
  mxm_dataset_ID: string;
  bag_of_words: (number | string)[][];
};


export type MusicResponse = {
  content: Music[];
};

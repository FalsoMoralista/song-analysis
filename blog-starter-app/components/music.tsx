import React from 'react';
import { Music } from '../interfaces/music';

type MusicCardProps = {
  music: Music;
};

const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="/placeholder-image.jpg" alt={music.song_title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{music.song_title}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{music.artist}</p>
          <p className="mt-2 text-gray-500">{music.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
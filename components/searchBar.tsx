import { FC } from "react";
import { Song } from "../interfaces/song";


interface SearchBarProps {
    queryString: string;
    onQueryStringChange: (string) => void;
}


export const SearchBar: FC<SearchBarProps> = ({
    onQueryStringChange,
    queryString
}) => {

    return (<form><input type="text" className="border-2 mt-4 mb-8 ml-60 w-4/6 px-20 h-14 border-slate-800 rounded " name="buscador" placeholder={queryString} onChange={(e) => onQueryStringChange(e.target.value)}/></form>); 
  }

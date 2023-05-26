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

    return (<form><input type="text" name="buscador" placeholder={queryString} onChange={(e) => onQueryStringChange(e.target.value)}/></form>); 
  }

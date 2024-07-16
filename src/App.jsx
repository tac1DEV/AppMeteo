import {useState} from 'react'
import Today from "./composants/Today"
import Search from './composants/Search';
import Chaine from './composants/Chaine';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Paris");

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
  };

  return(
    <div>
    <Search onSearchSubmit={handleSearchSubmit}/>
    <Today searchTerm={searchTerm}/>
    <Chaine searchTerm={searchTerm}/>
    </div>
  )
}

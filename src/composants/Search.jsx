import {useState, useRef, useEffect} from 'react'
import Majuscule from './../Majuscule';

const Search = ({onSearchSubmit}) => {
  let [search, setSearch] = useState("");
  const inputRef = useRef(null);

const onSubmit = (e) =>{
  e.preventDefault();
  setSearch(inputRef.current.value);
}

useEffect(() => {
  onSearchSubmit(search);
},[onSearchSubmit, search])

  return (
    <>
    <div className='w-screen'>
      <div className='mx-auto my-5 w-fit'>
        <form className='text-3xl' onSubmit={onSubmit}>
          <label>Ville :</label>
          <input className='p-1 ml-2' type="text" ref={inputRef} placeholder={Majuscule(search) || "Paris"}></input>
          <button type="submit"></button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Search
import { useState,useEffect } from 'react';    
import Cardlist from './Cardlist'; 
import './App.css';
import Seacrh from './Seacrh';

//usestate  : bir değişkeni değiştiginde react.app'ın haberdar olmasını ve bu degeri kullanabilmemizi sağlar. 
//useeffect : reactta verdigin koşula göre gerekli işlemleri yapar.   
/*
function BenimFonksyonum(parametre1,parametre2){                classic functionnp
} 
const BenimFonksyonum = (parametre1,parametre2) => {            arrow function
}
(parametre1,parametre2)=>{                                      anonim function
}
*/

const apim = "https://dummyjson.com/users"

const App = () => {
  const [kullaniciler, kullanicigüncelle] = useState([])
  const [filter,filterupdate] = useState([])
  const [search,searchupdate] = useState ('') 

  useEffect(()=>{
  fetch (apim)
  .then((cevap)=>cevap.json())
  .then(fetchcevap => {
    //console.log(fetchcevap.users)
    kullanicigüncelle(fetchcevap.users)
  })
  },[])

  useEffect (()=>{
    const filters = kullaniciler.filter((element)=>{
      if(element.firstName.toLocaleLowerCase().includes(search)) {
        return element; 
      }
      return null;
    })

    filterupdate(filters)
  }, [search, kullaniciler])

  const dosearch = (event) => {
    searchupdate(event.target.value.toLocaleLowerCase())
  }

  return (
    <div className="App">
      <h1 className='app-title'>THE ZOMBIES</h1>
      <Seacrh searchevent = {dosearch} /> 
      <Cardlist dizi = {filter}></Cardlist>
    </div>
  );
}

export default App;

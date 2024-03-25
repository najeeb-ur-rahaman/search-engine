import {react,useRef,useState} from 'react'
import List from './List'
import SearchData from './SearchData';
const SearchBar = () => {

    const [data,setData]=useState([]);
    const inputElement = useRef();
    const [showButton,setShowButton]=useState(true);
//  const handleSubmit= async () => {
//     alert("hello")
//   console.log(inputElement.current)
      
      
//    const res=   await  fetch('http://localhost:8080/searchByName?q=req');
//         const data=await res.json();
//         console.log(data);
//         setData(data);
//     };  
    const getData = async () => {
        console.log("hello" + inputElement.current?.value);
        const res = await fetch(`http://localhost:8080/searchByName/${inputElement.current?.value}`);
        const data = await res.json();
        setData(data);
        setShowButton(false)
      };
    return(
   <div>
     {showButton? 
     <div> 
        <input  type="text" ref={inputElement}/>
        
      <button onClick={getData}>Button</button>
      </div>

    :

      <SearchData data={data}/>
}
        </div>)
}
export default SearchBar;
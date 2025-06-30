import {React,useState} from "react";
import  NavBar from './components/NavBar';
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { filterData,apiUrl } from "./data.js";
import { useEffect } from "react";
import Spinner from './components/Spinner.js';
import { toast } from "react-toastify";

function App(){
  // const [filterData, setFilterData] = useState(filterData);
  const [courses,setCourses] = useState(null);
  const [loader,setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); 

  async function fetchData(){
    setLoader(true);
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log(data.data)
      setCourses(data.data);
    }catch(error){
      toast.error('Error in data fetch');
    }
    setLoader(false);
  }

  useEffect(()=>{
    console.log('App rendered');
    fetchData();
  },[])

  return (
    <div className="w-[100vw] min-h-[100vh] bg-bgDark2 overflow-x-hidden overflow-y-auto">
      <NavBar/>
      <Filters filterData = {filterData} category={category} setCategory = {setCategory}/>
      {
        loader?(<Spinner/>):(<Cards courses = {courses} category = {category} setCategory =  {setCategory}/>)
      }
    </div>
    );
};

export default App;

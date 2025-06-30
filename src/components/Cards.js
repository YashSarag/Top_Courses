import {React,useState} from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

function Cards({courses,category,setCategory}){
  function getCourses(){
    let arr = [];
    if(category === "All"){
        Object.values(courses).forEach((category)=>{
        category.forEach((course)=>{
        arr.push(course);
      })
    });
    }
    else{
      courses[category].forEach((course)=>{
          arr.push(course);
      })
    }
    return arr;
  }

  let [likedCourses,setLikedCourses] = useState([]);
  function likeHandler(id){
    if(likedCourses.includes(id)){
      let newCourses = likedCourses.filter((cid)=> cid != id);
      setLikedCourses(newCourses);
      toast.warning('Removed from likes');
    }else{
      setLikedCourses(prev=>[...prev,id]);
      toast.success('Liked Successfully');
    }

  }
  return (
    <div className={`w-[85%] max-w-[950px] mx-auto flex flex-wrap justify-center gap-[16px] mb-5
               ${category==='Lifestyle' ? ('pt-[20px]') : ('')} `}>
      {
        getCourses().map((course)=>{
          return <Card key={course.id} course = {course} likedCourses = {likedCourses} likeHandler={likeHandler} />
        })
      }
    </div>
  )
}

export default Cards;

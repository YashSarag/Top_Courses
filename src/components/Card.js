import {React,useState} from 'react'
import { GoHeartFill  } from "react-icons/go";
import { toast } from 'react-toastify';

function Card({course,likeHandler,likedCourses}){
  const desc =  course.description;
  const [like,setLike] = useState(false);


  return (
    <div className="w-[300px] rounded-md overflow-hidden bg-bgDark text-white bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} className="w-[100%]"/>
        {/* onClick={()=>setLike(!like) */}
        <button  onClick={()=>likeHandler(course.id)}
                className="absolute bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center right-2 -bottom-3 text-[25px]">
          {
             likedCourses.includes(course.id) ? (<GoHeartFill  color='rgba(255,0,0,0.8)' />) : (<GoHeartFill  color='rgba(255,0,0,0.2)' />)
            //{/* like ? (<GoHeartFill  color='rgba(255,0,0,0.8)' />) : (<GoHeartFill  color='rgba(255,0,0,0.2)' />) */}

            
          }
        </button>
      </div>
      <div className="p-[18px]">
        <div className="text-[1.125rem] font-semibold mb-[6px]">{course.title}</div>
        <div>
          {desc.length > 100 ? (desc.substr(0,100)+'...') : (desc)}
        </div>
      </div>
    </div>
  )
}

export default Card;

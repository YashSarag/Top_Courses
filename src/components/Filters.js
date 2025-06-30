import React from 'react'

function Filters({filterData, category, setCategory}){
  return (
    <div className="w-[85%] max-w-[930px] mx-auto flex justify-center items-center gap-[20px] text-[1.125rem] my-[15px] flex-wrap">
        {
            filterData.map((data)=>{
                return <button key={data.id} onClick={()=>setCategory(data.title)}
                            className={`bg-[#00000066] text-white font-semibold px-[8px] py-[4px] 
                                 rounded-md 
                                ${category === data.title ? ('outline-[2px] outline outline-white bg-[#00000088]') : ('')}`}>
                            {data.title}
                         </button>
            })          
        }

    </div>
  )
}

export default Filters;

import React from 'react'

function Spinner(){
  return (
    <div className="h-[100vh] absolute top-[50%] left-[50%] translate-x-[-50%]">
        <div className="spinner"></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner;

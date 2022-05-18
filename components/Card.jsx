import React from 'react'
import Image from 'next/image'

const Card = ({id, name, hogwartsHouse, image}) => {
  //His name was way too long for this
  if (name === 'Albus Percival Wulfric Brian Dumbledore') {
    name = 'Albus Dumbledore';
  }
  else if (name === 'Hermione Jean Granger') {
    name = 'Hermione Granger';
  }

  return (
    <div className="p-1 w-[47vw] border rounded-lg shadow-2xl shadow-black md:w-[25vw] lg:w-[20vw]">
      <div className="bg-white rounded-lg">
        <img
          src={image}
          alt=""
          className="rounded-t-lg w-[47vw] h-[52vw] md:w-[25vw] md:h-[30vw] lg:w-[20vw] lg:h-[25vw]"
        />
        <div className="p-6">
          <h2 className="font-bold mb-2 text-xl sm:text-2xl md:text-xl lg:text-2xl 2xl:text-4xl font-harryp">
            {name}
          </h2>
          <p className= "mb-2 sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl font-harryp">
           House: {hogwartsHouse}
          </p>
        
        </div>
      </div>
    </div>
  );
}
export default Card

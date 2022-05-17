import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Card from './Card'



const Searchbar = ({data}) => {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='min-h-[85vh] sm:min-h-[87vh] lg:min-h-[80vh] pt-20'>
      <div className="text-black bg-white flex p-8 justify-center">
        <div className="border rounded overflow-hidden flex ">
          <input
            type="text"
            className="px-4 py-2 min-w-[15rem] md:min-w-[35rem] lg:min-w-[60rem] font-harryp text-2xl"
            placeholder="Search Character..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button className="flex items-center justify-center px-4 border-l hover:bg-red-600">
            <SearchIcon className="h-4 w-4 text-grey-dark" />
          </button>
        </div>
      </div>
      <div className="mx-[5vw] x-sm:mx-[2vw]">
        <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data
            .filter((result) => {
              if (searchTerm == "") {
                return result;
              } else if (
                result.character
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return result;
              }
            })
            .map((result, key) => {
              const { id, character, hogwartsHouse, image } = result;

              return (
                <div key={key} id={character}>
                  <Card
                    id={id}
                    name={character}
                    hogwartsHouse={hogwartsHouse}
                    image={image}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar
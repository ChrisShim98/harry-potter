import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Card from './Card'

const Searchbar = ({data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardShow, setCardShow] = useState(false);
  const [charId, getCharName] = useState('');
  const handleClick = () => {setCardShow(!cardShow)};

  console.log(charId);
  return (
    <div className="min-h-[85vh] sm:min-h-[87vh] lg:min-h-[80vh] pt-20">
      <div className="text-black bg-[#f4f6f7] flex p-8 justify-center">
        <div className={cardShow ? "hidden" :"border rounded overflow-hidden flex "}>
          <input
            type="text"
            className="px-4 py-2 min-w-[15rem] md:min-w-[35rem] lg:min-w-[60rem] font-harryp text-2xl"
            placeholder="Search Character..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button className="flex items-center justify-center px-4 border-l bg-white hover:bg-red-600">
            <SearchIcon className="h-4 w-4 text-grey-dark" />
          </button>
        </div>
      </div>
      <div className="mx-[5vw] x-sm:mx-[2vw]">
        <div
          className={
            !cardShow
              ? "grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4"
              : "hidden"
          }
        >
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
                <div key={key} id={character} onClick={handleClick}>
                  <a onClick={(event) => getCharName(character)}>
                    <Card
                      id={id}
                      name={character}
                      hogwartsHouse={hogwartsHouse}
                      image={image}
                    />
                  </a>
                </div>
              );
            })}
        </div>
        <div className={!cardShow ? "hidden" : "grid place-items-center"}>
          {data
            .filter((result) => {
              if (charId == "") {
                return result;
              } else if (
                result.character
                  .includes(charId)
              ) {
                return result;
              }
            })
            .map((result, key) => {
              const { id, character, hogwartsHouse, image } = result;

              return (
                <div key={key} id={character} onClick={handleClick}>
                  <a onClick={(event) => getCharName(id)}>
                    <Card
                      id={id}
                      name={character}
                      hogwartsHouse={hogwartsHouse}
                      image={image}
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar
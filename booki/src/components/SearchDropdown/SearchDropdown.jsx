import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SearchDropdown = ({ searchData }) => {
  const navigate = useNavigate()
  return (
    <>
      {searchData && searchData.length !== 0 ? (
        <div className="absolute min-h-[50px] bg-gray-100 shadow-sm-2 z-[9] p-4 w-[60%] top-[160px] right-[140px] text-blue-500">
          {searchData &&
            searchData.map((i, index) => {
              const d = i.name;

              const book_name = d.replace(/\s+/g, "-");
              
              const handleClick = ()=>{
                navigate(`/book/${book_name}`, {
                  state: { bookData: searchData },
                });
              }
              return (
                <button
                  key={index}
                  onClick={() => handleClick()}
                  className="w-full text-center border border-b"
                >
                  <div className="w-full flex items-start-py-3 ">
                    <h1>{i.name}</h1>
                  </div>
                </button>
              );
            })}
        </div>
      ) : (
        <div className="absolute min-h-[50px] bg-gray-100 shadow-sm-2 z-[9] p-4 w-[60%] top-[165px] right-[120px] text-blue-500 text-center">
          No Search Result
        </div>
      )}
    </>
  );
};

export default SearchDropdown

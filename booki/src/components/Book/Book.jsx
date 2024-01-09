import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";


const Book = () => {
  // ...getting registration data
  const location = useLocation();
  const bookData = location?.state?.bookData;

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      {console.log(bookData)}
      <div className="bg-white w-[700px] h-[350px] border rounded-xl shadow-md pt-20 p-10">
        {bookData &&
          bookData.map((i, index) => (
            <div key={index}>
              <h2 className="text-[18px] font-[900] text-center mb-4">{i.name}</h2>
              <div className="grid grid-cols-2 gap-1">
                <h3>Author</h3>
                <p className='text-wrap'>{i.authors}</p>
                <h3>Number of Pages</h3>
                <p className='text-wrap'>{i.numberOfPages}</p>
                <h3>ISBN</h3>
                <p className='text-wrap'>{i.isbn}</p>
                <h3>Media Type</h3>
                <p className='text-wrap'>{i.mediaType}</p>
                <h3>Characters</h3>
                <p className='text-wrap'>{i.povCharacters?.length}</p>
                <h3>Publisher</h3>
                <p className='text-wrap'>{i.publisher?.length}</p>
                <h3>Released Date</h3>
                <p className='text-wrap'>{i.released.slice(0, 10)}</p>
                <h3>Url </h3>
                <p className='text-wrap'>{i.url}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Book

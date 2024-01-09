 
import React from 'react'
import { useLocation } from "react-router-dom";


const Book = () => {
  // ...getting registration data
  const location = useLocation();
  const bookData = location?.state?.bookData;

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      {console.log(bookData)}
      <div className="bg-white w-[700px] sm:h-[350px] border rounded-xl shadow-md pt-20 p-10">
        {bookData &&
          bookData.map((i, index) => (
            <div key={index}>
              <h2 className="text-[18px] font-[900] text-center mb-4">
                {i.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 w-full ">
                <h3 className='text-center sm:text-left font-[600]'>Author</h3>
                <p className="text-wrap text-center sm:text-left">{i.authors}</p>
                <h3 className='text-center sm:text-left font-[600]'>Number of Pages</h3>
                <p className="text-wrap text-center sm:text-left">{i.numberOfPages}</p>
                <h3 className='text-center sm:text-left font-[600]'>ISBN</h3>
                <p className="text-wrap text-center sm:text-left">{i.isbn}</p>
                <h3 className='text-center sm:text-left font-[600]'>Media Type</h3>
                <p className="text-wrap text-center sm:text-left">{i.mediaType}</p>
                <h3 className='text-center sm:text-left font-[600]'>Characters</h3>
                <p className="text-wrap text-center sm:text-left">{i.povCharacters?.length}</p>
                <h3 className='text-center sm:text-left font-[600]'>Publisher</h3>
                <p className="text-wrap text-center sm:text-left">{i.publisher?.length}</p>
                <h3 className='text-center sm:text-left font-[600]'>Released Date</h3>
                <p className="text-wrap text-center sm:text-left">{i.released.slice(0, 10)}</p>
                <h3 className='text-center sm:text-left font-[600]'>Url </h3>
                <p className="text-wrap text-center sm:text-left">{i.url}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Book

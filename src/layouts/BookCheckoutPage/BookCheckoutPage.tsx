import React, { useState,useEffect } from 'react'
import BookModel from '../../models/BookModel'
import SpinnerLoading from '../../utils/SpinnerLoading';

const BookCheckoutPage = () => {
    const[book, setBook] = useState<BookModel>();
    const[isLoading, setisLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const bookId= (window.location.pathname).split("/")[2];
    useEffect(() => {
        const fetchBook = async () => {
          const baseUrl: string = `http://localhost:1988/api/books/${bookId}`;
       
          const response = await fetch(baseUrl);
          if (!response.ok) {
            throw new Error("Something went wrong !!");
          }
          const responseJson = await response.json();
        //  const responseData = responseJson._embedded.books;
          const loadedBook: BookModel = {
         
            id: responseJson.id,
            title: responseJson.title,
            author: responseJson.author,
            description: responseJson.description,
            copies: responseJson.copies,
            copiesAvailable: responseJson.copies,
            category: responseJson.category,
            img: responseJson.img,
          };
        
          setBook(loadedBook);
          setisLoading(false);
        };
        fetchBook().catch((error: any) => {
          setisLoading(false);
          setHttpError(error.message);
        });
      }, []);
      if (isLoading) {
        return (
          <div className="container m-5">
            <SpinnerLoading />
          </div>
        );
      }
      if (httpError) {
        return (
          <div className="container m-5">
            <p>{httpError}</p>
          </div>
        );
      }
  return (
    <div>
       <h3> this is the BookCheckoutPage</h3> 
        </div>
  )
}

export default BookCheckoutPage
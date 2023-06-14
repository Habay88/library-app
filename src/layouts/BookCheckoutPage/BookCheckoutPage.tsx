import React from 'react'
import { useEffect,useState } from 'react';
import BookModel from '../../models/BookModel';
import SpinnerLoading from '../../utils/SpinnerLoading';
import ReviewModel from '../../models/ReviewModel';
import { error } from 'console';
import StarsReviews from '../../utils/StarsReviews';
import CheckoutAndReviewBox from './CheckoutAndReviewBox';
import LatestReviews from './LatestReviews';

const BookCheckoutPage = () => {

  const [book, setBook] = useState<BookModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  // Review state 
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(true);


  //review state
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const[totalStars, setTotalStars] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const bookId = (window.location.pathname).split('/')[2];

  useEffect(() => {
      const fetchBook = async () => {
          const baseUrl: string = `http://localhost:1988/api/books/${bookId}`;

          const response = await fetch(baseUrl);

          if (!response.ok) {
              throw new Error('Something went wrong!');
          }

          const responseJson = await response.json();

          const loadedBook: BookModel = {
              id: responseJson.id,
              title: responseJson.title,
              author: responseJson.author,
              description: responseJson.description,
              copies: responseJson.copies,
              copiesAvailable: responseJson.copiesAvailable,
              category: responseJson.category,
              img: responseJson.img,
          };

          setBook(loadedBook);
          setIsLoading(false);
      };
      fetchBook().catch((error: any) => {
          setIsLoading(false);
          setHttpError(error.message);
      })
  }, []);
useEffect(()=>{
    const fetchBookReviews = async () =>{
        const reviewUrl: string = `http://localhost:1988/api/reviews/search/findByBookId?bookId=${bookId}`
    const responseReviews = await fetch(reviewUrl);
    if(!responseReviews.ok){
        throw new Error('Something went wrong !');
    }
    const responseJsonReviews = await responseReviews.json();
    const responseData = responseJsonReviews._embedded.reviews;
    const loadedReviews: ReviewModel[] = [];
    let weightedStarReviews: number =0;

    for(const key in responseData){
        loadedReviews.push({
            id:responseData[key].id,
            userEmail: responseData[key].userEmail,
            date: responseData[key].date,
            rating: responseData[key].rating,
            book_id: responseData[key].bookId,
            reviewDescription: responseData[key].reviewDescription,


  if (isLoading) {
      return (
          <SpinnerLoading />
      )
  }

  if (httpError) {
      return (
          <div className='container m-5'>
              <p>{httpError}</p>
          </div>
      )
  }

  return (
      <div>
          <div className='container d-none d-lg-block'>
              <div className='row mt-5'>
                  <div className='col-sm-2 col-md-2'>
                      {book?.img ?
                          <img src={book?.img} width='226' height='349' alt='Book' />
                          :
                          <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width='226'
                              height='349' alt='Book' />
                      }
                  </div>
                  <div className='col-4 col-md-4 container'>
                      <div className='ml-2'>
                          <h2>{book?.title}</h2>
                          <h5 className='text-primary'>{book?.author}</h5>
                          <p className='lead'>{book?.description}</p>
                      </div>
                  </div>
              </div>
              <hr />
          </div>
          <div className='container d-lg-none mt-5'>
              <div className='d-flex justify-content-center align-items-center'>
                  {book?.img ?
                      <img src={book?.img} width='226' height='349' alt='Book' />
                      :
                      <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width='226'
                          height='349' alt='Book' />
                  }
              </div>
              <div className='mt-4'>
                  <div className='ml-2'>
                      <h2>{book?.title}</h2>
                      <h5 className='text-primary'>{book?.author}</h5>
                      <p className='lead'>{book?.description}</p>
                  </div>
              </div>
              <hr />
          </div>
      </div>
  );
}
export default BookCheckoutPage
import React, { useState } from 'react'
import BookModel from '../../models/BookModel'

const BookCheckoutPage = () => {
    const[book, setBook] = useState<BookModel>();
    const[isLoadingBook, setisLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null)
  return (
    <div>
       <h3> this is the BookCheckoutPage</h3> 
        </div>
  )
}

export default BookCheckoutPage
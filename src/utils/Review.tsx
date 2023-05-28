import React from 'react'
import ReviewModel from '../models/ReviewModel'
import StarsReviews from './StarsReviews';

const Review: React.FC<{review: ReviewModel}> = (props) => {
  const date = new Date(props.review.date);
  const longMonth = date.toLocaleString("en-us",{month: 'long'});
  const dateDay = date.getDate();
  const dateYear = date.getFullYear();
  const dateRender = longMonth + '' + dateDay + '' +  dateYear;
    return (
    <div className='col-sm-8 col-md-8'>
<h5>{props.review.userEmail}</h5>
<div className='row'>
<div className='col'>
{dateRender}
</div>
<div className='col'>
<StarsReviews rating={props.review.rating} size={16}/>
</div>
</div>
    </div>
  )
}

export default Review
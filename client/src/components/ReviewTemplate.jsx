import React, {useState, useEffect} from 'react';
// import axios from "axios";
import styles from '../styleComponents/Reviews.module.css';
import Helpful from './Helpful';

const ReviewTemplate = ({ reviews }) => (
  <div>
    {reviews.map((review, id) => (
      <div key={id} className={styles.reviewTemplate}>
        <div className={styles.templateRating}>{review.rating}</div>
        <div className={styles.templateSummary}>{review.summary}</div>
        <div className={styles.templateBody}>{review.body}</div>
        <div className={styles.templateUserDateBar}>
          <UserDateBar review={review} />
        </div>
        <div className={styles.templateHelpfulReportBar}>
          <Helpful review_id={review.review_id} helpfulness={review.helpfulness} />
        </div>
        <div className={styles.templateResponseFromSeller}>{review.response}</div>
        {/* <div className={styles.templateImages}>{review.photos}</div> */}
        <div className={styles.templateRecommendsBar}> I recomend this product</div>
      </div>
    ))}
  </div>
);

const UserDateBar = ({ review }) => {
  const getDate = (date) => {
    const dateArr = date.slice(0, date.indexOf('T')).split('-');
    const year = dateArr.shift();
    dateArr.push(year);
    return dateArr.join('-');
  };

  const date = getDate(review.date)

  return (
    <div>
      <div className={styles.userDateBar}>{review.reviewer_name}</div>
      <div className={styles.userDateBar}>{date}</div>
    </div>
  );
};

export default ReviewTemplate;

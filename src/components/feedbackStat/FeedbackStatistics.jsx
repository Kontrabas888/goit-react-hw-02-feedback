import React from 'react';
import PropTypes from 'prop-types';
import style from '../counter/Counter.module.css';

const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={style.span_statistic}>
      <h2 className={style.text_post_feed}>Feedback</h2>

      <ul className={style.item_block}>
        <li className={style.item}>Good: {good}</li>
        <li className={style.item}>Neutral: {neutral}</li>
        <li className={style.item}>Bad: {bad}</li>
        <li className={style.item}>Total: {total}</li>
        <li className={style.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
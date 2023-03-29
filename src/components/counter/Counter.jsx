import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';
import FeedbackStatistics from '../feedbackStat/FeedbackStatistics';

const buttonValues = ["Good", "Neutral", "Bad"];

class Counter extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    feedbackGiven: false,
  };

  handleClick = (value) => {
    this.setState((prevState) => ({
      [value.toLowerCase()]: prevState[value.toLowerCase()] + 1,
      feedbackGiven: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad, feedbackGiven } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <section className={style.buttons}>
        <h1>Please leave feedback</h1>

        <div className={style.button}>
          {buttonValues.map((button, index) => (
            <button className={style.buttons_tree} key={index} onClick={() => this.handleClick(button)}>
              {button}
            </button>
          ))}
        </div>

        {feedbackGiven ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <h2 className="text-feedback">No feedbacks given</h2>
        )}
      </section>
    );
  }
}

export default Counter;

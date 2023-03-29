import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const calculateTotal = () => good + neutral + bad;
  
  const calculatePositivePercentage = () => ((good / calculateTotal()) * 100).toFixed(2);

  return (
    <ul className={styles.statistics_list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {calculateTotal()}</li>
      <li>Positive feedback: {calculatePositivePercentage()}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default Statistics;
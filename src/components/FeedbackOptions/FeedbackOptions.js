import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options = [], onLeaveFeedback = () => {} }) => (
  <>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
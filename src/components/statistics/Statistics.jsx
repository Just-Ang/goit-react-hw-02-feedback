
import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = props => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}> Good: {props.good} </li>
      <li className={css.listItem}> Neutral: {props.neutral} </li>
      <li className={css.listItem}> Bad: {props.bad} </li>
      <li className={css.listItem}> Total: {props.total}</li>
      <li className={css.listItem}> Positive feedback: {props.positivePercentage} %</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
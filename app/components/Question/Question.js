import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Question = ({ question, buttonHandler }) => {
  return (
    <td><button onClick={() => buttonHandler(question.id)}>{question.text}</button></td>
  );
};

Question.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number,
        completed: PropTypes.bool,
        buttonHandler: PropTypes.func
    })
};

export default Question;

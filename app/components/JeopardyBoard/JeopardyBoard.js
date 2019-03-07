import React from 'react';
import Question from 'components/Question'
import test from './test.json'
import PropTypes from 'prop-types';
import './style.scss';

const JeopardyBoard = ({ buttonHandler }) => {
    return (
        <div>
            <table>
                <tbody>
                    {test.qlist.map((element, index) =>
                        <tr key={index}>
                            {element.map((question) =>
                                <Question question={question} buttonHandler={buttonHandler} key={question.id} />
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

JeopardyBoard.propTypes = {

};



export default JeopardyBoard;

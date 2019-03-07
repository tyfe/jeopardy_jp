import React from 'react';
import JeopardyBoard from 'components/JeopardyBoard'
import './style.scss';

export default class BoardPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  buttonHandler = (index) => {
    return () => { console.log(index) }
  }

  render() {
    const {
      onBoardButtonPress
    } = this.props;
    return (
      <div className="board">
        {/* <p>test</p>  */}
        <JeopardyBoard buttonHandler={onBoardButtonPress} />
      </div>
    );
  }
}
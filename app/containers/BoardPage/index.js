import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { boardButtonPress } from './actions';
import reducer from './reducer';
import BoardPage from './BoardPage';

const mapDispatchToProps = (dispatch) => ({
  onBoardButtonPress: (id) => dispatch(boardButtonPress(id))
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(BoardPage);
export { mapDispatchToProps };
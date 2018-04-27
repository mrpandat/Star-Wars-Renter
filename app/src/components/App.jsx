import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors
});


const App = connect(
  mapStateToProps
)(Main);

export default App;

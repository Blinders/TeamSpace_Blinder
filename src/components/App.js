import React, {Component, PropTypes} from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {

  constructor(props) {
    super(props);

  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentWillMount(){
    injectTapEventPlugin();

  }

  render(){
      return (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      );
  }

}
App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
export default App;

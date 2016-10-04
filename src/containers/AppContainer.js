import React, {Component, PropTypes} from 'react';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

class AppContainer extends Component {

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
            {this.props.children}
          <Footer />
        </div>
      );
  }
}
AppContainer.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
export default AppContainer;

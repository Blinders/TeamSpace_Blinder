import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import HomeButton from './HomeButton'
import SelectField from 'material-ui/SelectField'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    }
  }

  handleChange(event, index, value){
    console.log(handleEvent)
    this.setState({value})
  }
  gray(){
    console.log(this)
    }

    handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div style={{height: '56px'}}>
        <Toolbar style={{backgroundColor: '#2196F3'}}>
          <ToolbarGroup firstChild={true} >
            <HomeButton />
            <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
            </ToolbarGroup>
            </Toolbar>
      </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Header = connect(undefined, undefined)(Header);

export default Header;

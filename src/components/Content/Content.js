import React, {Component} from 'react';
import { connect } from 'react-redux';
//import LoginForm from './LoginForm';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const datas = [{
    primary : 'Photos 1',
    secondary: 'Jan 9, 2014'
  },
  {
    primary : 'Photos 2',
    secondary: 'Jan 9, 2015'
  },
  {
    primary : 'Photos 3',
    secondary: 'Jan 9, 2016'
  },
  {
    primary : 'Photos 4',
    secondary: 'Jan 9, 2017'
  },
  {
    primary : 'Photos 5',
    secondary: 'Jan 9, 2018'
  },
  {
    primary : 'Photos 6',
    secondary: 'Jan 9, 2018'
  },
  {
    primary : 'Photos 7',
    secondary: 'Jan 9, 2018'
  }
]

class Content extends Component {

    constructor(props) {
      super(props);
      this.state = {
        expanded: false,
        width:'20%'
      };
    }
    gray(){
      console.log("Gray Click")
    }

    handleExpandChange = (expanded) => {
       if(expanded){
         this.setState({expanded: expanded,
           width:'300px'
         });
       }else{
         this.setState({expanded: expanded,
           width:'20%'
         });
       }

     };

     handleToggle = (event, toggle) => {
       this.setState({expanded: toggle});
     };

     handleExpand = () => {
       this.setState({expanded: true});
     };

     handleReduce = () => {
       this.setState({expanded: false});
     };

    render() {

        return (
          <div style={{
            height: 'calc(100vh - 100px)',
            textAlign: 'center'
          }}>
            <Paper style={{margin:'20px', width: '20%', float:'left', height: '80vh', overflowY: 'auto'}} zDepth={2}>
              <List>
                {datas.map((data, index) => (
                  <div>
                    <ListItem
                      primaryText={data.primary}
                      secondaryText={data.secondary}
                    />
                    <Divider style={{width:'100%'}} />
                  </div>
                ))}
              </List>
            </Paper>
            <Paper style={{margin:'20px', width: '70%', float:'left', height: '80vh', overflowY: 'auto'}} zDepth={2}>
      <Card style={{width:this.state.width, margin:'10px', float:'left' }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="image/mainLogo.png"
        actAsExpander={true}
        showExpandableButton={false}
      />
      <CardText>
        <Toggle
          toggled={this.state.expanded}
          onToggle={this.handleToggle}
          labelPosition="right"
          label="This toggle controls the expanded state of the component."
        />
      </CardText>
      <CardMedia
        expandable={true}
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="image/mainLogo.png" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Expand" onTouchTap={this.handleExpand} />
        <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
      </CardActions>
    </Card>


    <Card style={{width:this.state.width, margin:'10px', float:'left' }} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
    <CardHeader
      title="URL Avatar2"
      subtitle="Subtitle"
      avatar="image/mainLogo.png"
      actAsExpander={true}
      showExpandableButton={false}
    />
    <CardText>
      <Toggle
        toggled={this.state.expanded}
        onToggle={this.handleToggle}
        labelPosition="right"
        label="This toggle controls the expanded state of the component."
      />
    </CardText>
    <CardMedia
      expandable={true}
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="image/mainLogo.png" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Expand" onTouchTap={this.handleExpand} />
      <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
    </CardActions>
  </Card>


            </Paper>
          </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Content = connect(undefined, undefined)(Content);

export default Content;

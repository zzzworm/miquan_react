import React, { Component }  from 'react'
import AppBar from 'material-ui/AppBar';
import Slider from 'react-slick';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const imageStyles = {
    width: 50,
    height: 50,
    maxWidth: 50,
    minWidth: 50
};

const answerTimeStyles = {
  display : "inline-block",
  position: "absolute",
  right: 15
};
class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
    <CardHeader
      title="username"
      avatar="images/jsa-128.jpg"
    />
    <CardText >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardMedia
    >
      <img src="images/nature-600-337.jpg" alt="" style ={imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
    </CardMedia>
    <CardTitle title="23小时5分钟内回答"/>
  </Card>
    )
  }
}



class Answer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
    <CardHeader
      title="username"
      titleStyle = {{display : "inline-block"}}
      avatar="images/jsa-128.jpg"
      subtitle = "3天前"
      subtitleStyle = {answerTimeStyles}
    />
    <CardText >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardMedia
    >
      <img src="images/nature-600-337.jpg" alt="" style ={imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
      <img src="images/nature-600-337.jpg" alt="" style = {imageStyles}/>
    </CardMedia>
  </Card>
    )
  }
}

class QuestionDetail extends Component {
  render() {
    return (
      <div>
        <AppBar title="提问详情" />
        <List>
      <Question />
      <Divider />
      <Answer />
    </List>
    </div>
    )
  }
}
export default QuestionDetail

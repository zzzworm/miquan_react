import React, { Component }  from 'react'
import AppBar from 'material-ui/AppBar';
import Slider from 'react-slick';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { browserHistory } from 'react-router'

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
      请问精液常规和精子碎片是两个不同的检查吗？最近在微博上了解到精子碎片率。我老公之前只做了常规，碎片是否有必要检查？谢谢。帮我看看这个报告要不要紧，怎么数值高那么多，能正常备孕吗？
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

function handleTouchTap()
{
  browserHistory.push('question/create')
}

class QuestionDetail extends Component {
  render() {
    return (
      <div>
        <AppBar title="提问详情" iconElementRight={<FlatButton label="提问" onTouchTap={handleTouchTap} />}  />
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

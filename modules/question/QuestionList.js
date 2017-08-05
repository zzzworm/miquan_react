import React, { Component }  from 'react'
import AppBar from 'material-ui/AppBar';
import Slider from 'react-slick';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton';
import QuestionBriefItem from './elements/QuestionBriefItem'
import { browserHistory } from 'react-router'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight : false
};

const questionListData = [
  {
    title: '请问精液常规和精子碎片是两个不同的检查吗？最近在微博上了解到精子碎片率。我老公之前只做了常规，碎片是否有必要检查？谢谢。帮我看看这个报告要不要紧，怎么数值高那么多，能正常备孕吗？ 能正常...',
    answerTime : '一天前',
    path: 'question/detail/1',

  },
  {
    title: '请问精液常规和精子碎片是两个不同的检查吗？最近在微博上了解到精子碎片率。',
    answerTime : '一天前',
    path: 'question/detail/2'
  }
];

const customLinkStyle = { textDecoration: "none" };

function handleTouchTap()
{
  browserHistory.push('question/create')
}

class QuestionList extends Component {
  render() {
    return (
      <div>
        <AppBar title="Question" iconElementRight={<FlatButton label="Save" onTouchTap={handleTouchTap} />} />
        <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        </Slider>
        <List>
        {questionListData.map((item) => (
          <Link to={item.path} key={item.path} style={customLinkStyle}>
      <QuestionBriefItem title={item.title} answerTime={item.answerTime}/>
      </Link>
    ))}
    </List>
    </div>
    )
  }
}
export default QuestionList

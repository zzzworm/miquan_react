import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const QuestionBriefItem = props => (
      <Card>
    <CardText >{props.title}
    </CardText>
    <CardTitle title={props.answerTime}/>
  </Card>
)


export default muiThemeable()(QuestionBriefItem);

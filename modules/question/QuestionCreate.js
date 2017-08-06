import React, { Component }  from 'react'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {
  TextField,
  Toggle,
} from 'redux-form-material-ui'
import {connect} from 'react-redux';

function handleTouchTap()
{

}

class QuestionCreateForm extends Component {
  componentDidMount() {
    // this.refs.questionText // the Field
    //   .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    //   .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    //   .focus(); // on TextField
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <div>
        <AppBar title="提问" iconElementRight={<FlatButton label="保存" onTouchTap={handleTouchTap} />} />
      <form>
        <Field name="questionText" component={TextField} hintText="描述详情" multiLine={true}
      rows={10}
      rowsMax={15} ref="name"
            withRef />

        <Field name="isPrivate" component={Toggle} label="匿名提交"/>
      </form>
      </div>
    )
  }
}

// Decorate with redux-form
QuestionCreateForm = reduxForm({
  form: 'questionCreateForm',
  initialValues: {
    questionText: '请问精液常规和精子碎片是两个不同的检查吗？最近在微博上了解到精子碎片率。我老公之前只做了常规，碎片是否有必要检查？谢谢。帮我看看这个报告要不要紧，怎么数值高那么多，能正常备孕吗？',
    isPrivate: false
  },
})(QuestionCreateForm)

export default QuestionCreateForm

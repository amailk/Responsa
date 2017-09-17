import React, {Component} from 'react'
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import * as firebase from 'firebase'

export class CourseLive extends Component {

  constructor(props) {
    super(props);

    console.log("constructor");
    console.log(props);

    this.state = {
      question : {
        text : "",
        answers : []
      },
      selected: new Set()
    }
  }

  componentDidMount() {
    console.log(this.props.match);

    var courseId = this.props.match.params.courseId.toLowerCase();

    var dbRef = firebase.database().ref('/courses/' + courseId);
    dbRef.on('value', course => {
      var liveQuestion = course.val().live.status;
      this.updateQuestion(liveQuestion);
      this.setState({liveQuestion: liveQuestion});
    })
  }

  updateQuestion(liveQuestion) {
    var dbRef = firebase.database().ref('/questions/' + liveQuestion);
    dbRef.on('value', question => {
      console.log(question.val());
      this.setState({"question": question.val()});
    })
  }

  onCheck(answer) {
    var index = this.state.question.answers.indexOf(answer);
    if (this.state.selected.has(index)) {
      this.state.selected.delete(index);
    } else {
      this.state.selected.add(index);
    }

    this.setState({selected: this.state.selected});
  }

  isChecked(answer) {
    var index = this.state.question.answers.indexOf(answer);
    return this.state.selected.has(index);
  }

  onSubmit() {
    var dbRef = firebase.database().ref('answers/' + this.state.liveQuestion + "/user1");
    dbRef.set({
      answer: [...this.state.selected]
    });
  }

  render() {
    return(
      <div>
        <div>
          <h2>{this.state.question.text}</h2>

            <form>
            {this.state.question.answers.map(answer =>
              <Checkbox
                key={answer}
                label={answer}
                checked={this.isChecked(answer)}
                onCheck={this.onCheck.bind(this, answer)}
              />
            )}

            <br/>

            <RaisedButton
              label="Submit"
              onClick={this.onSubmit.bind(this)}
            />

            </form>
        </div>
      </div>
    )
  }
}
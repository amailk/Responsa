import React, {Component} from 'react'

import * as firebase from 'firebase'

export class CourseLive extends Component {

    constructor(props) {
        super(props);

        console.log("constructor");
        console.log(props);

        this.state = {
            "question": {
                "text": "",
                "answers": []
            }
        }
    }

    componentDidMount() {
        console.log(this.props.match);

        var courseId = this.props.match.params.courseId.toLowerCase();

        var dbRef = firebase.database().ref('/courses/' + courseId);
        dbRef.on('value', course => {
            var liveQuestion = course.val().live.status;
            this.updateQuestion(liveQuestion)
        })
    }

    updateQuestion(liveQuestion) {
        var dbRef = firebase.database().ref('/questions/' + liveQuestion);
        dbRef.on('value', question => {
            console.log(question.val());
            this.setState({"question": question.val()});
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <h2>{this.state.question.text}</h2>

                    <ul>
                        {this.state.question.answers.map(answer =>
                            <li>{answer}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

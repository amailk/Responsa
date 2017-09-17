import React from 'react'
import {Bar} from 'react-chartjs-2'

import * as firebase from 'firebase'

export class Teacher extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      courseId: "cp104",
      liveQuestion: "q02",
      question: {
        text: "",
        answers: [,,,]
      },
      chartOptions: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      },
      data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            data: [5, 10, 3, 8],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#9E62FF'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#9E62FF'
            ]
          }
        ]
        }

    }
  }

  componentDidMount() {
    var dbRef = firebase.database().ref('/courses/' + this.state.courseId);
    dbRef.on('value', course => {
      var liveQuestion = course.val().live.status;
      this.updateQuestion(liveQuestion);
      this.updateAnswers(liveQuestion);
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

  updateAnswers(liveQuestion) {
    var dbRef = firebase.database().ref('/answers/' + liveQuestion);


    dbRef.on('value', answers => {
      var answers = answers.val();
      var newDataSet = [0, 0, 0, 0];
      console.log("dbRef");
      console.log(answers);

      for (var user in answers) {
        console.log(answers[user]);
        for (var x in answers[user].answer) {
          let answerVal = answers[user].answer[x];
          console.log(answerVal);
          newDataSet[answerVal] ++;
        }
      }

      console.log(newDataSet);

      var newData = this.state.data;
      newData.datasets[0].data = newDataSet;

      this.setState({data: newData});
    });

  }

  render() {
    console.log("rendering");
    console.log(this.state);
    return(
      <div>
        <div>
          <h2>{this.state.question.text}</h2>
          <ul>
            <li><b>A</b> {this.state.question.answers[0]}</li>
            <li><b>B</b> {this.state.question.answers[1]}</li>
            <li><b>C</b> {this.state.question.answers[2]}</li>
            <li><b>D</b> {this.state.question.answers[3]}</li>
          </ul>
        </div>

        <div>
          <h2>Live Results</h2>
          <Bar data={this.state.data} options={this.state.chartOptions}/>
        </div>

      </div>
    )
  }
}

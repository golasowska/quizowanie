import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import './App.css';
import { getQuestion } from './actions/questionActions';
import { scoreUp, scoreDown } from './actions/scoreActions';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      correctAnswer: false,
      wrongAnswer: false
    }
  }

  componentDidMount(){
    this.props.getQuestion();
  }

  handleLoadNewQuestion = () => {
    this.props.scoreDown();
    this.props.getQuestion();

    this.setState({
      correctAnswer: false,
      wrongAnswer: false
    });
  };

  handleUserAnswer = (event, value) => {
    if(value === this.props.reduxQuestion.question[0].answers){
      this.setState({
        correctAnswer: true,
        wrongAnswer: false
      });
      this.props.scoreUp();
      this.props.getQuestion();
    } else {
      this.setState({
        correctAnswer: false,
        wrongAnswer: true
      });
      this.props.scoreDown();
    }
  };

  render() {
    return (
      <div>
      { this.props.reduxQuestion.question ? <div>

      <AppBar
        title="Quizowanie"
        showMenuIconButton={false}
        iconElementRight={ <FlatButton onClick={this.handleLoadNewQuestion} label="Load new question" /> }
      />
      <div id="main-wrapper">
        <Card>
          <CardTitle  title={ this.props.reduxQuestion.question[0].question } subtitle={ `category: ${ this.props.reduxQuestion.question[0].category.name }` } />
          <CardActions>
            <Menu onChange={this.handleUserAnswer}>
              <MenuItem primaryText={ this.props.reduxQuestion.question[0].option1 } value={1} />
              <MenuItem primaryText={ this.props.reduxQuestion.question[0].option2 } value={2} />
              <MenuItem primaryText={ this.props.reduxQuestion.question[0].option3 } value={3} />
              <MenuItem primaryText={ this.props.reduxQuestion.question[0].option4 } value={4} />
            </Menu>
          </CardActions>
        </Card>
        <h2 className="score">score: <span>{this.props.reduxScore.score} points</span></h2>
      </div>

      <Snackbar
        open={this.state.correctAnswer}
        message="Correct answer! +5 pk"
        autoHideDuration={2000}
      />

      <Snackbar
        open={this.state.wrongAnswer}
        message="Wrong answer! -5 pk"
        autoHideDuration={2000}
      />
      </div> : null}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    reduxQuestion: appState.question,
    reduxScore: appState.score
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestion, scoreUp, scoreDown }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

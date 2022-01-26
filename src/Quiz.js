import React, { Component, useState } from "react";
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    }
    //
    showNextQuestion(){
        this.setState(oldstate => {return 
            {quz_position = oldstate.quiz_position+1;}  
        })
    }

    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length);
        if (!isQuizEnd) {
            return (
                <div>                    
                    <QuizQuestion showNextQuestionHandler ={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                </div>)
        }
        else{
            return (<div>
                <QuizEnd />
                
            </div>)
        }

    }



}

export default Quiz;
import React from "react";

import QuestionStore from "../stores/QuestionStore";
import Choice from "../components/interval_question/Choice";

export default class IntervalQuestion extends React.Component {
  constructor(){
    super();
    this.state = {
      question: null 
    };
  }
  componentWillMount(){
    this.setState({question: QuestionStore.getNewQuestion(this.props.params.qg)})
  }
  render() {
    const {choices} = this.state.question
    const {question} = this.state
    const ChoiceComponents = choices.map((choice)=>{
      return <Choice key={choice.id} choice={choice}/>; 
    }); 
    console.log(question)
    return(<div>
      <h1>{question.prompt}</h1>
      {ChoiceComponents} 
      <button class="btn btn-default">Submit</button>
    </div>)
  }
  
}

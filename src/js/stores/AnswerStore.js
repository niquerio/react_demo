import {EventEmitter} from "events";

class AnswerStore extends EventEmitter{
  constructor(){
    super();
    this.answers = 
      { 
        'so-mi': 
          {
            correct_answer: 1,
          },
        'so-la': 
          {
            correct_answer: 3,
          },
        'mi-la': 
          {
            correct_answer: 6,
          }
    }  
  }

  getCorrect(answer,slug) {
    correct = this.answers[slug.slice(0,-2)].correct_answer 
    return correct == answer
  }
}

const AnswerStore = new AnswerStore

export default AnswerStore;

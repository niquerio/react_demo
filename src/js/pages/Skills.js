import React from "react";

import SkillStore from "../stores/SkillStore";
export default class Skills extends React.Component {
  constructor(){
    super();
    this.state = {
      skill: null 
    };
  }
  componentWillMount(){
    this.setState({skill: SkillStore.getSkill(this.props.params.skill)})
  }
  render() {
    const {name} = this.state.skill
    const {question_generators} = this.state.skill
    console.log(question_generators);
    return (
      <h1>{name}</h1>
    )    
  }
}

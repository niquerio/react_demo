import React from 'react';

export default class Leaf extends React.Component{
  render(){
    const {leaf} = this.props;
    return(
      <li>{leaf.name}</li> 
    )
  }
}

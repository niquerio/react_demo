import React from "react";

export default class Choice extends React.Component {
  playMidi(){
    MIDI.Player.loadFile(this.props.choice.midi, function(){
      MIDI.Player.stop();
      MIDI.Player.resume();
    });
  }
  render(){
    const {choice} = this.props;
    return(
     <h4>{choice.name}  <button onClick={this.playMidi.bind(this)} type="button"  class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-play" aria-hidden="true"></span>
</button></h4> 
    )
  }
}

import React from "react";
import Player from '../../stores/PlayerStore';

export default class Choice extends React.Component {
  playMidi(){
    Player(



this.props.choice.midi, function(){
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

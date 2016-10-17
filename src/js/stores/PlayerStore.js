import MIDI from 'MIDI';
import {EventEmitter} from "events";

class PlayerStore extends EventEmitter{
  constructor(){
    super();
    this.MIDI = MIDI
  }

  init() {
    this.MIDI.loadPlugin();
  }

  play(midi){
    this.MIDI.Player.loadFile(midi, function(){
      MIDI.Player.resume();
    });
  }
}

const playerStore = new playerStore
playerStore.init()

export default playerStore;

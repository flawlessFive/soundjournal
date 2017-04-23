import { combineReducers } from 'redux';
import GetSong from './get_song.js';

const rootReducer = combineReducers({

	song: GetSong
  
});

export default rootReducer;
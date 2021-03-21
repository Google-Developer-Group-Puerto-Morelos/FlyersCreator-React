import { combineReducers } from 'redux';
import { updateConferenceData as conference } from './conference/conference';

export default combineReducers({
    conference
});
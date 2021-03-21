import initialState from '../../initialState';
import { IDefaultState } from '../../models/IState';
import * as CONFERENCE_CONSTANTS from './constants';

interface IAction {
    type: String,
    payload: object
}

export function updateConferenceData(state: IDefaultState = initialState, action: IAction) {

    switch (action.type) {
        case CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA:
            const { payload }  = action;
            return  {...state, ...payload  };
        default:
            return state;
    }
}

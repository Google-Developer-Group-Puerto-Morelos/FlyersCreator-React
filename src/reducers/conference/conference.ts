import * as CONFERENCE_CONSTANTS from './constants';

export function updateConferenceData(draft: any = false, action: any) {

    switch (action.type) {
        case CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA:
            const { payload }  = action;
            return  {...draft, ...payload  };
        default:
            return draft;
    }
}

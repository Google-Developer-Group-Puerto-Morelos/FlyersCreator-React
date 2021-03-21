import * as CONFERENCE_CONSTANTS from '../../reducers/conference/constants';

export const log =()=>{
    return ()=>{
        console.log("message")
    }
}



export const updateName = (event: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { name: event.target.value }
        })
    }
}

export const updateSpeakerName = (event: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { speaker: event.target.value }
        })
    }
}

export const updateAddress = (event: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { address: event.target.value }
        })
    }
}

export const updateDate = (moment: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { date: moment.toDate() }
        })
    }
}


import * as CONFERENCE_CONSTANTS from '../../reducers/conference/constants';
import html2canvas from 'html2canvas';

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

export const updateCity = (event: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { city: event.target.value }
        })
    }
}

export const updateDate = (moment: any) =>{
    return (dispatch: any) => {
        const date = (moment) ? moment.toDate() : new Date()
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { date }
        })
    }
}
export const updateTheme = (payload: any) =>{
    return (dispatch: any) => {
        dispatch({
            type: CONFERENCE_CONSTANTS.UPDATE_CONFERENCE_DATA,
            payload: { theme: payload }
        })
    }
}


export const saveFlyer = (event: any) =>{
    console.log('save the flyer')
    html2canvas(document.getElementById("flyer") , {
        useCORS: true,
        allowTaint: true,
        scale: 1,
        dpi: 500,
    }).then(function (canvas: any) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download =  "fyler.png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}


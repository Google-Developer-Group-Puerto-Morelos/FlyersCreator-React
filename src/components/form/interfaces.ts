import { IConference } from "../../models/IState";

export interface IFormComponentProps {
    conference: IConference
    updateName: Function
    updateSpeakerName: Function
    updateCity: Function
    updateDate: Function
    updateTheme: Function
    saveFlyer: Function
}

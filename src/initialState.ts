import { IDefaultState, Themes } from "./models/IState";

const initialState : IDefaultState = {
    conference: {
        date: new Date(),
        name: 'Conference name',
        speaker: 'SpeakerName',
        city: 'West View',
        theme: Themes.GDG
    }
}
export default initialState;
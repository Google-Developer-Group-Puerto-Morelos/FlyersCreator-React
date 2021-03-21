export enum Themes {
    GDG = 'gdg',
    OWASP = 'owasp'
}

export interface IConference {
    date: Date
    name: String,
    speaker: String, 
    city: String
    theme: Themes
}

export interface IDefaultState {
    conference: IConference
}
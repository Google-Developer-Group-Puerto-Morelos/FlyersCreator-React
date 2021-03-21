import { IConference, Themes } from "../../models/IState";
import GDGBackground from './images/gdg-background.png';
import OWASPBackground from './images/owasp-background.png';

export const getBackground =  (conference: IConference) => {
    switch(conference.theme) {
        case Themes.GDG: 
            return GDGBackground;
        case Themes.OWASP:
            return OWASPBackground;
    }    
}
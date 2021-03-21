import { useSelector } from "react-redux"
import GDGBackground from './images/gdg-background.png';
import OWASPBackground from './images/owasp-background.png';

export const getBackground =  (conference: any) => {
    switch(conference.theme) {
        case 'gdg': 
            return GDGBackground;
        case 'owasp':
            return OWASPBackground;
    }    
}
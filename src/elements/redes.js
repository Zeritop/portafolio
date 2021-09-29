import { ReactComponent as Linkedin } from '../Image/linkedin.svg';
import { ReactComponent as GitHub } from '../Image/signo-de-github.svg';

const redes = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/sebastian-lagos-muñoz-498a06203/'
    },
    {
        id: 'github',
        url: 'https://github.com/Zeritop'
    }
]

const redIcon = (icon) => {
    switch(icon){
        case 'linkedin':
            return <Linkedin />

        case 'github':
            return <GitHub />
            
        default:
            return '';    
    }
}

export {
    redes,
    redIcon
}
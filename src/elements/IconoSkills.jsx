import { ReactComponent as Brackets } from '../Image/brackets.svg';
import { ReactComponent as Backend } from '../Image/backend.svg';
import { ReactComponent as BDD } from '../Image/dato.svg';
import { ReactComponent as Otro } from '../Image/configuracion-de-pc.svg';

const IconoSkills = ({icono}) => {
    switch(icono){
        case 'Frontend':
            return <Brackets />
        
        case 'Backend':
            return <Backend />

        case 'Base de Datos':
            return <BDD />
            
        case 'Otros':
            return <Otro />
                
        default:
            return ''    
    }
}
 
export default IconoSkills;
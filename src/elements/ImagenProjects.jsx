import mern from '../Image/app-gastos-mern.png';
import firebase from '../Image/app-gastos-firebase.png';
import cih from '../Image/checkinhouse.png';
import milista from '../Image/app-mi-lista.png';

const ImagenProjects = ({imagen}) => {
    switch(imagen){
        case 'app-gastos-mern':
            return <img src={mern} alt="app-gastos-mern" />
        
        case 'app-gastos-firebase':
            return <img src={firebase} alt="app-gastos-firebase" />

        case 'checkinhouse':
            return <img src={cih} alt="checkinhouse" />
        case 'app-mi-lista':
            return <img src={milista} alt="app-mi-lista" />        
        default:
            return ''    
    }
}
 
export default ImagenProjects;
import mern from '../Image/app-gastos-mern.png';
import firebase from '../Image/app-gastos-firebase.png';
import cih from '../Image/checkinhouse.png';

const ImagenProjects = ({imagen}) => {
    switch(imagen){
        case 'app-gastos-mern':
            return <img src={mern} alt="" />
        
        case 'app-gastos-firebase':
            return <img src={firebase} alt="" />

        case 'checkinhouse':
            return <img src={cih} alt="" />    
        default:
            return ''    
    }
}
 
export default ImagenProjects;
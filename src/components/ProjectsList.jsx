import React from 'react';
import { Body } from './PrincipalContent';
import projects from '../elements/projects';
import {
    GrillaProjects,
    ProjectsBox,
    ProjectCard,
    ProjectHeader,
    ContainerButton,
    ButtonVer
} from '../elements/StyleProjects';
import ImagenProjects from '../elements/ImagenProjects';
import { ReactComponent as DoubleArrow } from '../Image/double-right-arrows-angles.svg';


const ProjectsList = () => {
    return ( 
        <Body>
            <h2>Projects</h2>
            <GrillaProjects>
                {
                    projects.map( pr => (
                        <ProjectsBox key={pr.image}>
                            <ProjectCard>
                                <ProjectHeader> <ImagenProjects  imagen={pr.image} /> </ProjectHeader>
                                    <h3>{ pr.titulo }</h3>
                                    <p>{ pr.descripcion }</p>
                                    <ContainerButton>
                                            <ButtonVer to={`/projects/${pr.image}`} $mismoFondo >
                                                Ver Más...<DoubleArrow /> 
                                            </ButtonVer>
                                        </ContainerButton>
                            </ProjectCard>
                        </ProjectsBox>
                    ))
                }
            </GrillaProjects>
        </Body>
     );
}
 
export default ProjectsList;
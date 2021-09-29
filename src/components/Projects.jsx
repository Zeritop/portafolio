import React from 'react';
import styled from 'styled-components';
import { Equilatero, EquilateroInvertido } from './PrincipalContent';
import theme from '../theme';
import ImagenProjects from '../elements/ImagenProjects';
import { TituloCategoria } from './PrincipalContent';
import { ReactComponent as DoubleArrow } from '../Image/double-right-arrows-angles.svg';
import projects from '../elements/projects';
import {
    GrillaProjects,
    ProjectsBox,
    ProjectCard,
    ProjectHeader,
    ContainerButton,
    ButtonVer
} from '../elements/StyleProjects';


const ContainerProjects = styled.div`
    width: 100%;
    background:${theme.thirdColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.textIcons};
    padding: 10px 0;
`;

const Projects = () => {

    return ( 
        <>
            <Equilatero id="sectionProjects" />
                <ContainerProjects>
                    <TituloCategoria>
                        <h2>Projects</h2>
                        <hr />
                    </TituloCategoria>
                    <GrillaProjects>
                        {
                            projects.map( (pr, index) => {
                                if(index <= 2){
                                    return(<ProjectsBox key={pr.titulo}>
                                        <ProjectCard>
                                            <ProjectHeader> <ImagenProjects imagen={pr.image} /> </ProjectHeader>
                                            <h3>{ pr.titulo }</h3>
                                            <p>{ pr.descripcion }</p>
                                            <ContainerButton>
                                                <ButtonVer to={`/projects/${pr.image}`} $mismoFondo >
                                                    Ver Más...<DoubleArrow /> 
                                                </ButtonVer>
                                            </ContainerButton>
                                        </ProjectCard>
                                    </ProjectsBox>)
                                }
                                return pr
                            })
                        }
                    </GrillaProjects>
                    <ButtonVer to="/projects" >Ver Mas Proyectos</ButtonVer>
                </ContainerProjects>
            <EquilateroInvertido />
        </>
     );
}
 
export default Projects;
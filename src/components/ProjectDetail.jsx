import React, { Fragment } from 'react';
import { Body } from './PrincipalContent';
import projects from '../elements/projects';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ImagenProjects from '../elements/ImagenProjects';
import theme from '../theme';

const GrillaProject = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 10px;
    margin: 20px;

    @media (max-width: 900px){
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;

const ContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        padding: 10px;
    }
`;

const ContainerImage = styled.div`
    width: 100%;

    img{
        width: 100%;
    }
`;

const LinkWeb = styled.a`
    display: block;
    background: ${theme.firstColor};
    color: ${theme.textIcons};
    text-decoration: none;
    text-align: center;
    padding: 3px 0;
    transition: all .3s ease;

    &:hover{
        background: ${theme.thirdColor};
    }
`;

const ProjectDetail = () => {

    const { id } = useParams()
    const project = projects.filter(pr => pr.image === id)

    return ( 
        <Body>
           <h2>Details</h2>
           <GrillaProject>
            {
                project.map( pr => (
                    <Fragment key={pr.image}>
                        <ContainerProject>
                            <h2>{pr.titulo}</h2>
                            <p>{pr.descripcion}</p>
                        </ContainerProject>
                        <ContainerImage>
                            <ImagenProjects imagen={pr.image} />
                            <LinkWeb target="_blank" href={pr.url} rel="noreferrer" >Ir al Sitio Web</LinkWeb>   
                        </ContainerImage>  
                    </Fragment>    
                ))
            } 
           </GrillaProject>
        </Body>
     );
}
 
export default ProjectDetail;
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

const GrillaProjects = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 5px;
    margin: 100px 0;

    @media (max-width: 800px){
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;

const ProjectsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ProjectCard = styled.div`
    width: 100%;
    background: ${theme.firstColor};
    padding: 10px;
    margin: 10px 0;
    color: ${theme.textIcons};
    border-radius: 10px;
    transition: all .3s ease;

    p{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: large;
        margin-bottom: 10px;
    }
    &:hover{
        box-shadow: 5px 5px 10px ${theme.fourthColor}, -5px -5px 10px ${theme.fourthColor};
    }
`;

const ProjectHeader = styled.div`
    width: 100%;

    img{
        width: 100%;
    }
`;

const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonVer = styled(Link)`
    width: ${props => props.$mismoFondo ? `65%` : `30%`};
    margin: 5px;
    color: ${theme.textIcons};
    background: ${props => props.$mismoFondo ? theme.thirdColor : theme.firstColor};
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 5px;
    font-size: large;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all .3s ease;

    svg{
        width: 15%;
        height: auto;
        fill: ${theme.textIcons};
    }

    &:hover{
        background: ${theme.fourthColor};
        color: ${theme.firstColor};
        svg{
            fill: ${theme.firstColor};
        }
    }

    @media (max-width: 800px){
        width: ${props => props.$mismoFondo ? `65%` : `50%`};
        text-align: center;
    }
`;

export {
    GrillaProjects,
    ProjectsBox,
    ProjectCard,
    ProjectHeader,
    ContainerButton,
    ButtonVer
}
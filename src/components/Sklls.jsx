import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';
import { ReactComponent as DownArrow } from '../Image/down-arrow.svg';
import IconoSkills from '../elements/IconoSkills';
import skills from '../elements/skills';
import { useSkill } from '../hooks/SkillHook';
import { TituloCategoria } from './PrincipalContent';

const SkillsContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40% ,1fr));
    grid-gap: 10px;
    margin-bottom: 100px;
    margin-top: 100px;
`;

const SkillElement = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const slideDown = keyframes`
    0%{
        
        opacity: 0;
    }
    10%{
        
        opacity: 0;
    }
    90%{
        
        opacity: 1;
    }
    100%{

        opacity: 1;
    }
`;

const SkillTitulo = styled.div`
    width: 70%;
    background: ${props => props.$isActive ? theme.thirdColor : theme.firstColor};
    border-radius: 5px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.textIcons};
    cursor: pointer;

    svg{
        width: 30%;
        max-height: 80%;
        fill: ${theme.textIcons};        
    }

    &:hover{
      background: ${theme.thirdColor};
    }

    @media(max-width: 800px){
        width: 100%;
    } 
`;

const Flecha = styled(DownArrow)`
    transform: ${props => props.$isActive ? 'rotate(180deg)' : '' };
`;

const SkillContent = styled.div`
    animation: ${slideDown} 2s ease;
    padding: 15px;
    width: 50%;
    margin: 8px 0;
    display: ${props =>  props.$isActive ? '' : 'none'  };
    font-size: large;
    font-weight: 600;

    ul{
        list-style: none;
        text-align: center;
    }

    box-shadow: -5px 5px 5px, 5px -5px 5px;

    @media(max-width: 800px){
        width: 100%;
    } 
`;

const Skills = () => {

    const act = useSkill();
    const act2 = useSkill();
    const act3 = useSkill();
    const act4 = useSkill();

    const elegirActive = {
        Frontend: () => act.activo,
        Backend: () => act2.activo,
        BaseDeDatos: () => act3.activo,
        Otros: () => act4.activo
    }
    
    const activar = {
        Frontend: () => {
            act.setActivo(!act.activo)
             return act.activo;
        },
        Backend: () => {
            act2.setActivo(!act2.activo);
            return act2.activo;
        },
        BaseDeDatos: () => {
            act3.setActivo(!act3.activo);
            return act3.activo;
        },
        Otros: () => {
            act4.setActivo(!act4.activo);
            return act4.activo;
        }
    }

    const handleActive = (e) => {
        if(e.currentTarget.dataset.valor !== undefined){
            return activar[e.currentTarget.dataset.valor]() 
        }
    }
    
    
    return ( 
        <>
            <TituloCategoria>
                <h2>Skills</h2>
                <hr />
            </TituloCategoria>
            <SkillsContainer>

                {
                    skills.map(skill => (
                        <Fragment key={skill.titulo}>
                            <SkillElement>
                                <SkillTitulo
                                    data-valor={skill.id}
                                    onClick={(e) => handleActive(e)}
                                    $isActive={elegirActive[skill.id]()}
                                > 
                                    <IconoSkills icono={skill.titulo} />
                                    { skill.titulo }                                
                                    <Flecha  $isActive={elegirActive[skill.id]()} />

                                </SkillTitulo>

                                <SkillContent 
                                    $isActive={elegirActive[skill.id]()}
                                >
                                    { 
                                    skill.skills.map(sk => (
                                        <ul key={sk[Object.keys(sk)]}>
                                            <li> { sk[Object.keys(sk)] } </li>
                                        </ul>
                                        
                                    ))
                                    }
                                </SkillContent>
                            </SkillElement>
                        </Fragment>
                    ))
                }
                
            </SkillsContainer>
        </>
     );
}
 
export default Skills;
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import seba from '../Image/seba.jpg';
import Skills from './Sklls';
import Projects from './Projects';

const Body = styled.div`
    width: 80%;
    height: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    background: ${theme.textIcons};
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: -5px 5px 5px ${theme.firstColor}, 5px -5px 5px ${theme.firstColor};

    @media(max-width: 767px){
        width: 100%;
        height: 100%;
        h2{
            margin-top: 50px;
        }
    } 

    @media (max-width: 900px) and (min-width: 768px){
        margin-top: 100px;
        h2{
            margin-top: 50px;
        }
    }
`;



const ContentPresentacion = styled.div`
    width: 80%;
    display: inline-flex;
    margin-bottom: 20px;
    margin-top: 5px;

    @media(max-width: 767px){
        flex-direction: column-reverse;
        padding-top: 80px;
        padding-bottom: 50px;
    } 
`;

const TituloPresentacion = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 50px;
    }
    p{
        font-size: 40px;
    }

    @media (max-width: 767px){
        width: 100%;
        h2{
            font-size: 35px;
        }
        p{
            font-size: 35px;
        }
    }

    @media (max-width: 900px) and (min-width: 768px){
        h2{
            font-size: 40px;
        }
        p{
            font-size: 30px;
        }
    }
`;

const FotoPresentacion = styled.div`
    margin: 100px 2px;
    padding: 5px;
    border-radius: 86% 14% 79% 21% / 32% 34% 66% 68%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    max-width: 50%;
    background: ${theme.secondColor};

    img{
        max-width: 50%;
        border-radius: 50%;
    }

    @media (max-width: 767px){
        display: none;
    }
`;

const ContainerExperience = styled.div`
    color: ${theme.textIcons};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.thirdColor};

    
`;

const ContentExperience = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;
    width: 80%;
    display: flex;
`;

const Experience = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.textIcons};
    margin: 0 10px;

    h4,p{
        color: ${theme.primaryText};
    }
    li{
        margin: 10px 0;
        font-weight: 600;
    }
`;

const TituloCategoria = styled.div`
    margin-top: 100px;
    border: 5px solid ${theme.primaryText};
    padding: 10px 100px;
    max-width: 50%;

    h2{
        margin-top: 20px;
        font-size: 50px;
    }

    hr{
        color: ${theme.primaryText};
    }

    @media(max-width: 800px){
        padding: 10px 20px;
        h2{
            font-size: 20px;
        }
    } 
`;




const PrincipalContent = () => {  
    return ( 
        <Body>
            <ContentPresentacion>
                <TituloPresentacion>
                    <h2>Sebastián Lagos</h2>
                    <p>Web Developer </p>
                    
                </TituloPresentacion>
                <FotoPresentacion> <img src={seba} alt="" /> </FotoPresentacion>
            </ContentPresentacion>
            
                   
                
            <div id="sectionExperience"></div>
                <ContainerExperience >
                    <TituloCategoria>
                        <h2>Experience</h2>
                        <hr />
                    </TituloCategoria>
                    <ContentExperience>
                        <Experience>
                            <h4> <strong>Check In House SPA | Start-up</strong> </h4>
                            <p> <strong>Desarrollador Web | 01/2019 – 12/2020</strong>  </p>
                            <ul>
                                <li>
                                    Reunir, definir y transformar los requisitos del cliente en tareas procesables. 
                                </li>
                                <li>
                                    Diseñar, construir y realizar mantenimiento completo de la aplicación web. 
                                </li>
                                <li>
                                Desarrollar aplicación web utilizando PHP, framework Laravel, MySQL base de 
    datos. 
                                </li>
                                <li>
                                Transformar un diseño de imagen en HTML y CSS (Bootstrap) para mejorar la 
    navegación y su atractivo.
                                </li>

                            </ul>
                        </Experience>
                        <Experience>
                            <h4> <strong>Mari Sushi | Proyecto Titulo</strong>  </h4> 
                            <p> <strong>Desarrollador Web | 09/2019 – 02/2020</strong> </p>
                            <ul>
                                <li>Reunir, definir y transformar los requisitos del cliente en tareas procesables.</li>
                                <li>Diseñar, construir la aplicación Web. </li>
                                <li>Crear aplicación Web utilizando Laravel, PHP, MySQL.</li>
                            </ul>
                        </Experience>
                    </ContentExperience>
                </ContainerExperience>

            <div id="sectionSklls"></div>
            <Skills />
            <Projects />
        </Body>
     );
}
 
export { 
    PrincipalContent,
    TituloCategoria,
    Body
};
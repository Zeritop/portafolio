import React, { Fragment } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { redes, redIcon } from '../elements/redes';


const ListaRedes = styled.ul`
    position: fixed;
    width: 4%;
    top: 50%;
    list-style: none;

    @media(max-width: 800px){
        display: none;
    }
`;

const ItemLista = styled.li`
    background: ${theme.thirdColor};
    padding-left: 5px;
    padding-top: 5px;
    width: 100%;
    transition: all 1s ease;
    margin-bottom: 2px;
    &:hover{
        background: ${prop => {
            switch(prop.$conColor){
                case 'linkedin':
                    return theme.linkedin;
                case 'github':
                    return theme.github;
                default:
                    return theme.firstColor;        
            }
        }};
        width: 150%;
        fill: ${theme.textIcons};
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

const Alink = styled.a`
    
    svg{
        width: 50%;
        max-height: 50px;
        margin-left: 15%;
    }
`;

const Redes = () => {
    return ( 
        <ListaRedes>
            {
                redes.map(red => (
                    <Fragment key={red.id}>
                        <Alink target="_blank" rel="noreferrer" href={red.url}>
                            <ItemLista $conColor={red.id}>        
                                { redIcon(red.id) }
                            </ItemLista>
                        </Alink>
                    </Fragment>
                ))
            }        
        </ListaRedes>
     );
}
 
export default Redes;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as GoTopArrow } from '../Image/semicircular-up-arrow.svg';
import theme from '../theme';

const GoToTop = styled.div`
    width: 60px;
    height: 60px;
    background:${theme.primaryText};
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 50px;
    margin-right: 40px;

    svg{
        width: 80%;
        height: auto;
        fill: ${theme.textIcons};
    }

    @media(max-width: 800px){
        display: none;
    } 
`;

const GoTop = () => {

    const [showTop, setShowTop] = useState(false);
    
    useEffect(() => {
        const visible = () => {
            if(window.pageYOffset > 500){
                setShowTop(true)
            } else {
                setShowTop(false)
            }
        }

        window.addEventListener("scroll", visible);

        return () => window.removeEventListener("scroll", visible); 
    }, [])

    const handleGoTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return ( 
        <>
        {
            showTop && (<GoToTop onClick={handleGoTop} >
                <GoTopArrow />
            </GoToTop>)
        }
            
        </>
     );
}
 
export default GoTop;
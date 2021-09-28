import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';




const StyledNav = styled.div`
    height: ${props => props.theme.measures.l};
    grid-area: navbar;
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.xxs};
`;

const StyledLogo = styled.div`
    width: ${props => props.theme.measures.s};
    padding: ${props => props.theme.spacing.xxs};
`;


const Navbar: React.FC = () => {
    return (
        <StyledNav>
            <StyledLogo>LOGO</StyledLogo>
            <Input />
        </StyledNav>
    )
}


export default Navbar
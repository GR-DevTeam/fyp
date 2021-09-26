import React from 'react';
import styled from 'styled-components';
import InputText from '../../atoms/InputText/InputText';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'styled-components';





const StyledNavbar = styled.nav`
    width: 100vw;
    height: ${props => props.theme.spacing.s};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.xs};
`;



const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <div>LOGO</div>
            <InputText icon={faSearch}/>
        </StyledNavbar>
    )
}


export default Navbar
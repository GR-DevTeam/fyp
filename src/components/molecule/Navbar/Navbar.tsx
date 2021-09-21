import React from 'react';
import styled from 'styled-components';
import InputText from '../../atoms/InputText/InputText';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const StyledNavbar = styled.nav`
    width: 97vw;
    height: 1.5rem;
    background: #0E0D0B;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;



const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <React.Fragment>LOGO</React.Fragment>
            <InputText icon={faSearch}/>
        </StyledNavbar>
    )
}


export default Navbar
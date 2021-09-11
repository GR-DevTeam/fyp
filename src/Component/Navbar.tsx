import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    width: 100wh;
    height: 1rem;
    background: #0E0D0B;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <div>logo</div>
            <div>imput</div>
        </StyledNavbar>
    )
}


export default Navbar

import styled from 'styled-components';
import { Action } from './Action';
import { Link } from './Link.home';

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Link />
                <Action />
            </HeaderContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #041f31;
    width: 100%;
`;

const HeaderContainer = styled.div`
    max-width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

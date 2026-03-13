import styled from 'styled-components';

export const Link = () => {
    return <LinkStyled href="#">Home</LinkStyled>;
};

const LinkStyled = styled.a`
    cursor: pointer;
`;

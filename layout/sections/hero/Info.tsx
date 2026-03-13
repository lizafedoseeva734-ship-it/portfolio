import styled from 'styled-components';

export const Info = () => {
    return (
        <InfoDiv>
            <Job>WEB DEVELOPER</Job>

            <Title>Erica Font</Title>

            <Description>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt.
            </Description>

            <Button>Contact Me</Button>
        </InfoDiv>
    );
};

const InfoDiv = styled.div`
    width: 514px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Job = styled.p`
    font-size: 20px;
    color: #d7e5ec;
`;

const Title = styled.h1`
    font-size: 72px;
    font-weight: 600;

    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #bdebea;
`;

const Button = styled.button`
    width: 134px;
    height: 45px;

    border-radius: 6px;
    border: none;

    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`;

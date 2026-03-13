import styled from 'styled-components';
import { AboutText } from './AboutText';

export const AboutMe = () => {
    return (
        <Section>
            <AboutWrapper>
                <AboutText />
            </AboutWrapper>
        </Section>
    );
};

const Section = styled.section`
    max-height: 169px;
    display: flex;
    align-items: center;
`;

const AboutWrapper = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

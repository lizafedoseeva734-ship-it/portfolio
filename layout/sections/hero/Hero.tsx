import styled from 'styled-components';
import { Info } from './Info';

export const Hero = () => {
    return (
        <Section>
            <Content>
                <Info />
                <ImagePlaceholder />
            </Content>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    align-items: center;
    margin-top: 160px;
    margin-bottom: 98px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 140px;
`;

const ImagePlaceholder = styled.div`
    width: 461px;
    height: 332px;

    background: linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%);
    border-radius: 20px;
`;

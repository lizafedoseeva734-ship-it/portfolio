import styled from 'styled-components';

export const AboutText = () => {
    return (
        <DivAbout>
            <TitleAbout>About me</TitleAbout>
            <AboutInfo>
                The long barrow was built on land previously inhabited in the
                Mesolithic period. It consisted of a sub-rectangular earthen
                tumulus, estimated to have been 15 metres (50 feet) in length,
                with a chamber built from sarsen megaliths on its eastern end.
                Both inhumed and cremated human remains were placed within this
                chamber during the Neolithic period, representing at least nine
                or ten individuals.
            </AboutInfo>
        </DivAbout>
    );
};

const DivAbout = styled.div`
    display: flex;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 169px;
`;

const TitleAbout = styled.h5`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.08333;
    letter-spacing: 0.04em;
    color: #bdebea;
`;

const AboutInfo = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    letter-spacing: 0.04em;
    color: #bdebea;
`;

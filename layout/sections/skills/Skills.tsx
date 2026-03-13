import styled from "styled-components";




export const Skills = () => {
    return (
        <Section>
            <SkillsWrapper>
            </SkillsWrapper>
        </Section>
    );
};

const Section = styled.section`
    margin-top: 130px;
    display: flex;
    align-items: center;
`;

const SkillsWrapper = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

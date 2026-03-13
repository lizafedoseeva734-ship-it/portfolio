import styled from 'styled-components';
import { ProjectsCard } from './ProjectsCard';

export const Projects = () => {
    return (
        <Section>
            <ProjectsWrapper>
                <ProjectsCard />
            </ProjectsWrapper>
        </Section>
    );
};

const Section = styled.section`
    margin-top: 130px;
    display: flex;
    align-items: center;
`;

const ProjectsWrapper = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

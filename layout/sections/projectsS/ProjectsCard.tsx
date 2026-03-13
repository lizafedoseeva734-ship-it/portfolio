import styled from 'styled-components';
import photo1 from '../../../assets/image/image 1@2x.png';

export const ProjectsCard = () => {
    return (
        <DivProjectsCard>
            <ProjectsCardTitle>Projects</ProjectsCardTitle>
            <ArticlesGrid>
                <ArticleLeft>
                    <ProjectImage src={photo1} alt="Проект 1" />
                    <ProjectContent>
                        <ProjectTitle>PROJECT 1</ProjectTitle>
                        <ProjectCardLine />
                        <ProjectCardDesc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </ProjectCardDesc>
                        <ProjectCardBtn>Look It Up</ProjectCardBtn>
                    </ProjectContent>
                </ArticleLeft>

                <ArticleRight>
                    <ProjectImage src={photo1} alt="Проект 2" />
                    <ProjectContent>
                        <ProjectTitle>PROJECT 2</ProjectTitle>
                        <ProjectCardLine />
                        <ProjectCardDesc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </ProjectCardDesc>
                        <ProjectCardBtn>Look It Up</ProjectCardBtn>
                    </ProjectContent>
                </ArticleRight>
            </ArticlesGrid>
        </DivProjectsCard>
    );
};

const ProjectCardLine = styled.hr`
    border-radius: 83px;
    width: 300px;
    height: 4px;
    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
    border: none;
    margin: 13px auto;
    position: static;
`;

const DivProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 20px;
    margin: 0 auto;
`;

const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 20px;

    @media (min-width: 1200px) {
        grid-template-columns: 522px 522px;
        justify-content: space-between;
    }
`;

const ProjectCardDesc = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    margin: 10px 0 20px 0; // Изменено: добавил отступ снизу для кнопки
    text-align: left;
    width: 100%;
`;

const ProjectTitle = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.08333;
    letter-spacing: 0.04em;
    color: #bdebea;
    margin: 0 0 10px 0;
    text-align: center;
    width: 100%;
`;

const ProjectsCardTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.08333;
    letter-spacing: 0.04em;
    color: #bdebea;
`;

const BaseArticle = styled.article`
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
    width: 550px;
    height: 670px;
    position: relative;
    overflow: hidden;
    background-color: #031624;
`;

const ArticleLeft = styled(BaseArticle)`
    @media (min-width: 1200px) {
        justify-self: start;
    }
`;

const ArticleRight = styled(BaseArticle)`
    @media (min-width: 1200px) {
        justify-self: end;
    }
`;

const ProjectImage = styled.img`
    border-radius: 24px 8px 8px 8px;
    width: 500px;
    height: 280px;
    object-fit: cover;
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 1;
`;

const ProjectContent = styled.div`
    position: absolute;
    top: 345px;
    left: 0;
    right: 0;
    padding: 0 25px;
    color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center; // Центрирует заголовок и линию
`;

const ProjectCardBtn = styled.button`
    border-radius: 83px;
    width: 200px;
    height: 60px;
    cursor: pointer;
    margin-top: 10px;
    align-self: flex-start; // Выравнивание по левому краю
    transition: transform 0.2s ease;
    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 20px;
    color: #fff;
`;

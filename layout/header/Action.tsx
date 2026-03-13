import styled from 'styled-components';

export const Action = () => {
    return (
        <DivLinkBtn>
            <LinkProject href="#">Projects</LinkProject>
            <BtnContact as="a" href="#">
                Contact
            </BtnContact>
        </DivLinkBtn>
    );
};

const DivLinkBtn = styled.div`
    display: flex;
    gap: 30px; /* Уменьшил gap для лучшего вида */
    align-items: center;
`;

const LinkProject = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #bdebea;
    transition: color 0.3s;

    &:hover {
        color: #00f5a0;
    }
`;

const BtnContact = styled.button`
    border-radius: 6px;
    padding: 12px 24px;
    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
    color: #041f31;
    font-weight: 600;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;


`;

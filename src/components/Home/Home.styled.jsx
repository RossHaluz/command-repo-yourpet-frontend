import styled from '@emotion/styled';

export const SectionHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  display: none;

  @media (min-width: 768px) {
    gap: 27px;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

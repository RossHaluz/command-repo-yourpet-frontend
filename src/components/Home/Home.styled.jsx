import styled from '@emotion/styled';

export const SectionHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 27px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 27px;
  }
`;

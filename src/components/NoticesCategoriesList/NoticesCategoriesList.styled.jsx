import { styled } from '@mui/system';

export const CategoriesListWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 32px;
  row-gap: 24px;
  max-width: 1248px;
  margin: auto;
  padding: 0;

  @media screen and (max-width: 747.98px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 748px) {
    margin-top: 40px;
  }  
`;

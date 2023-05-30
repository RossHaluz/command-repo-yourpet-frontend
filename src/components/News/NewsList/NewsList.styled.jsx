import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListItem = styled.li`
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  flex-basis: calc((100% - 20px * (1 - 1)) / 1);

  @media (min-width: 768px) {
    flex-basis: calc((100% - 20px * (2 - 1)) / 2);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 20px * (3 - 1)) / 3);
  }
`;

export const ListItemImg = styled.img`
  height: 252px;
  min-width: 100%;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const ListItemTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
`;

export const ListItemDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
  margin-bottom: 40px;
`;

export const ListItemDescWrapper = styled.div`
  padding: 12px;
  padding-top: 0;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListItemDate = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #888888;
`;

export const ListItemBtn = styled.button`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #54adff;

  &:hover,
  :focus {
    border-bottom: 1px solid #54adff;
  }
`;

export const ListItemLine = styled.div`
  height: 8px;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  border-radius: 40px;
  margin-top: 12px;
`;

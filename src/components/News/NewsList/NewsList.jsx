import { useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemImg,
  ListItemTitle,
  ListItemDescWrapper,
  ListItemDesc,
  ListItemWrapper,
  ListItemDate,
  ListItemBtn,
} from './NewsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewsList } from 'redux/news/selectors';
import { getOurNews } from 'redux/news/operetions';

const NewsList = () => {
  const dispatch = useDispatch();
  const { news } = useSelector(selectNewsList);

  useEffect(() => {
    dispatch(getOurNews());
  }, [dispatch]);

  return (
    <>
      {news && (
        <List>
          {news.map(({ img, title, desc, date, _id: id }) => {
            return (
              <ListItem key={id}>
                <ListItemImg src={img} alt="Img" width="280" height="252" />
                <ListItemDescWrapper>
                  <ListItemTitle>{title}</ListItemTitle>
                  <ListItemDesc>{desc}</ListItemDesc>
                  <ListItemWrapper>
                    <ListItemDate>{date}</ListItemDate>
                    <ListItemBtn>Read more</ListItemBtn>
                  </ListItemWrapper>
                </ListItemDescWrapper>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default NewsList;

// import NoticesCategoriesItem from 'components/NoticesCategoriesItem'
import { List, Item } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
    // console.log(notices);

  return (
    <List>
      {notices.length > 0 &&
        notices.map(notice => (
          <Item key={notice._id}>
            {/* <NoticesCategoriesItem notice={notice}/> */}
          </Item>
        ))}
    </List>
  );
};
export default NoticesCategoriesList;

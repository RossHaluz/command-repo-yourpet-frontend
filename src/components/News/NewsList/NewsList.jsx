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

const NewsList = () => {
  return (
    <List>
      <ListItem>
        <ListItemImg
          src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
          alt="Img"
          width="280"
          height="252"
        />
        <ListItemDescWrapper>
          <ListItemTitle>On Pets, Moral Logic and Love</ListItemTitle>
          <ListItemDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad
            praesentium amet omnis exercitationem commodi consectetur, officiis
            hic eius veniam quas explicabo tempora nobis, quisquam itaque at
            atque possimus.
          </ListItemDesc>
          <ListItemWrapper>
            <ListItemDate>15/03/2023</ListItemDate>
            <ListItemBtn>Read more</ListItemBtn>
          </ListItemWrapper>
        </ListItemDescWrapper>
      </ListItem>

      <ListItem>
        <ListItemImg
          src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
          alt="Img"
          width="280"
          height="252"
        />
        <ListItemDescWrapper>
          <ListItemTitle>On Pets, Moral Logic and Love</ListItemTitle>
          <ListItemDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad
            praesentium amet omnis exercitationem commodi consectetur, officiis
            hic eius veniam quas explicabo tempora nobis, quisquam itaque at
            atque possimus.
          </ListItemDesc>
          <ListItemWrapper>
            <ListItemDate>15/03/2023</ListItemDate>
            <ListItemBtn>Read more</ListItemBtn>
          </ListItemWrapper>
        </ListItemDescWrapper>
      </ListItem>

      <ListItem>
        <ListItemImg
          src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
          alt="Img"
          width="280"
          height="252"
        />
        <ListItemDescWrapper>
          <ListItemTitle>On Pets, Moral Logic and Love</ListItemTitle>
          <ListItemDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad
            praesentium amet omnis exercitationem commodi consectetur, officiis
            hic eius veniam quas explicabo tempora nobis, quisquam itaque at
            atque possimus.
          </ListItemDesc>
          <ListItemWrapper>
            <ListItemDate>15/03/2023</ListItemDate>
            <ListItemBtn>Read more</ListItemBtn>
          </ListItemWrapper>
        </ListItemDescWrapper>
      </ListItem>
    </List>
  );
};

export default NewsList;

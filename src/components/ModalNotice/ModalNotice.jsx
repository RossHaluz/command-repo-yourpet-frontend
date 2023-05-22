import { Box, List, Typography, ListItem, Button, CircularProgress } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BasicModal from "components/Modal/BasicModal"
import { useEffect, useState } from "react"
import { CategoryChipStyled, ImageBoxStyled, InfoBoxStyled, PetImageStyled, InfoTitleStyled, ListItemTextStyled } from "./ModalNotice.styled";
import { getNoticeById, addNoticeToFavorite, removeNoticeFromFavorite } from "api/NoticesApi";
import { useSelector } from 'react-redux';
import { selectUser } from "redux/auth/selectors";

const IMG_PLACEHOLDER = 'https://placehold.co/600x650';

const ModalNotice = ({ isOpen, toggleModal, noticeId = '64677cecf3d09b6400b3e3a0'}) => {
  const [notice, setNotice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAddedToFavorite, setIsAaddedToFavorite] = useState(false);
  
  let user = useSelector(selectUser);
  const getPhone = (user) => <a href={`tel: ${user.phone}`}>{user.phone}</a>;
  const getEmail = (user) => <a href={`mailto: ${user.email}`}>{user.email}</a>;
  const { name, title, imgURL, category, dateOfBirth, breed, place, sex, comments } = notice;

  const infoDefinitions = [
    { name: 'Name:', definition: name },
    { name: 'Birthday:', definition: dateOfBirth },
    { name: 'Breed:', definition: breed },
    { name: 'Place:', definition: place },
    { name: 'The sex:', definition: sex },
    { name: 'Email:', definition: getEmail(user) },
    { name: 'Phone:', definition: getPhone(user) },
  ];

  if (!user) {
    user = {email: '', phone: ''};
  }

  useEffect(() => { 
    if (isOpen) { 
      getNoticeById(noticeId).then(({notice}) => {
        setNotice(notice);
        setIsLoading(false);
        setIsAaddedToFavorite(() => notice.favorite?.includes(user?._id))
      })
    }
   
  }, [isOpen, noticeId, user?._id])

  const onAddToFavoritesClick = (e) => { 
    if (!isAddedToFavorite) {
      addNoticeToFavorite(noticeId, user.id).then((data) => {
        setIsAaddedToFavorite(true)
      })
    } else {
       removeNoticeFromFavorite(noticeId, user.id).then((data) => {
         setIsAaddedToFavorite(false)
       })
    }
  }

  return (
    <>
      <BasicModal isOpen={isOpen} toggleModal={toggleModal}> 
        {isLoading && (
          <Box sx={{textAlign: 'center'}}><CircularProgress /></Box>
        )}
        {!isLoading && (
          <>
            <Box display="flex" flexWrap="wrap">
              <ImageBoxStyled>
                <PetImageStyled src={imgURL ? imgURL : IMG_PLACEHOLDER} alt={name} />
                <CategoryChipStyled label={category} />
              </ImageBoxStyled>
              <InfoBoxStyled> 
                <InfoTitleStyled variant="h2" component="h2">
                  {title}
                  <List>
                    {infoDefinitions.map((item, index) => (
                      <ListItem key={index} sx={{padding: 0}}>
                        <ListItemTextStyled
                          primary={
                            <Typography component="div"
                              sx={{
                                display: 'inline-block', fontWeight: '600',
                                width: {
                                  mobile: '80px',
                                  tablet: '120px'
                                }
                              }}>
                              {item.name}
                            </Typography>
                          }
                          secondary={
                            <Typography component="div" sx={{display: 'inline-block', fontWeight: '500'}}>
                              {item.definition}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </InfoTitleStyled>
              </InfoBoxStyled>
            </Box>
            <Typography component="p" sx={{maxWidth: '680px', marginTop:'20px', fontWeight: 500}}>
              Comments: {comments}
            </Typography>
            <Box display="flex" justifyContent="end" alignItems="center" sx={{marginTop: '20px'}}>
              <Button onClick={onAddToFavoritesClick} variant={isAddedToFavorite ? 'contained' : 'outlined'} sx={{ width: '125px' }}>
                {isAddedToFavorite ? `Remove` : `Add to`} &nbsp; <FavoriteBorderIcon sx={{ verticalAlign: 'top', fontSize: '24px' }} />
              </Button>
              <Button component="a" href={`tel:${getPhone(user)}`} variant="outlined" sx={{width: '125px', marginLeft: '15px'}}>
                Contact
              </Button>
            </Box>
          </>
        )}
      </BasicModal>
    </>
  ) 
}

export default ModalNotice
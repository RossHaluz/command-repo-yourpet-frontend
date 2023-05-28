import {
  Box,
  List,
  Typography,
  ListItem,
  Button,
  CircularProgress,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BasicModal from 'components/Modal/BasicModal';
import { useEffect, useState } from 'react';
import {
  CategoryChipStyled,
  ImageBoxStyled,
  InfoBoxStyled,
  PetImageStyled,
  InfoTitleStyled,
  ListItemTextStyled,
  LinkStyled,
} from './ModalNotice.styled';
import { getNoticeById } from 'api/NoticesApi';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';


const IMG_PLACEHOLDER = 'https://placehold.co/600x650';

const ModalNotice = ({
  isOpen,
  toggleModal,
  noticeId,
  isFavorite,
  handleToggleFavorite,
}) => {
  const [notice, setNotice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(selectUser);
  const getPhone = owner => (
    <LinkStyled href={`tel: ${owner?.phone}`}>{owner?.phone}</LinkStyled>
  );
  const getEmail = owner => (
    <LinkStyled href={`mailto: ${owner?.email}`}>{owner?.email}</LinkStyled>
  );
  const {
    name,
    title,
    imgURL,
    category,
    dateOfBirth,
    breed,
    place,
    sex,
    comments,
    owner,
  } = notice;

  const infoDefinitions = [
    { name: 'Name:', definition: name },
    { name: 'Birthday:', definition: dateOfBirth },
    { name: 'Breed:', definition: breed },
    { name: 'Place:', definition: place },
    { name: 'The sex:', definition: sex },
    { name: 'Email:', definition: getEmail(owner) },
    { name: 'Phone:', definition: getPhone(owner) },
  ];

  useEffect(() => {
    if (isOpen) {
      getNoticeById(noticeId)
        .then(({ notice }) => {
          setNotice(notice);
          setIsLoading(false);
        })
        .catch(e => {
          setErrorMessage('Oops nothing found');
          setIsLoading(false);
        });
    }
  }, [isOpen, noticeId, user?._id]);

  return (
    <>
      <BasicModal isOpen={isOpen} toggleModal={toggleModal}>
        {isLoading && (
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading && errorMessage && (
          <Box sx={{ textAlign: 'center' }}>Nothing Found</Box>
        )}
        {!isLoading && !errorMessage && (
          <>
            <Box display="flex" flexWrap="wrap">
              <ImageBoxStyled>
                <PetImageStyled
                  src={imgURL ? imgURL : IMG_PLACEHOLDER}
                  alt={name}
                />
                <CategoryChipStyled label={category} />
              </ImageBoxStyled>
              <InfoBoxStyled>
                <InfoTitleStyled variant="h2" component="h2">
                  {title}
                  <List>
                    {infoDefinitions.map((item, index) => (
                      <ListItem key={index} sx={{ padding: 0 }}>
                        <ListItemTextStyled
                          primary={
                            <Typography
                              component="div"
                              sx={{
                                display: 'inline-block',
                                fontWeight: '600',
                                width: {
                                  mobile: '80px',
                                  tablet: '120px',
                                },
                              }}
                            >
                              {item.name}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              component="div"
                              sx={{
                                display: 'inline-block',
                                fontWeight: '500',
                              }}
                            >
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
            <Typography
              component="p"
              sx={{ maxWidth: '680px', marginTop: '20px', fontWeight: 500 }}
            >
              Comments: {comments}
            </Typography>
            <Box
              display="flex"
              justifyContent="end"
              alignItems="center"
              sx={{ marginTop: '20px' }}
            >
              <Button
                onClick={() => handleToggleFavorite(noticeId)}
                variant={isFavorite ? 'contained' : 'outlined'}
                sx={{ width: '125px' }}
              >
                {isFavorite ? `Remove` : `Add to`} &nbsp;{' '}
                <FavoriteBorderIcon
                  sx={{ verticalAlign: 'top', fontSize: '24px' }}
                />
              </Button>
              <Button
                component="a"
                href={`tel:${getPhone(user)}`}
                variant="outlined"
                sx={{ width: '125px', marginLeft: '15px' }}
              >
                Contact
              </Button>
            </Box>
          </>
        )}
      </BasicModal>
    </>
  );
};

export default ModalNotice;

import BasicModal from './BasicModal';
import PetsIcon from '@mui/icons-material/Pets';
import { GoToProfileButtonStyled } from './BasicModal.styled';

const CongratsModal = ({ isOpen, toggleModal}) => {
  return (
    <BasicModal isOpen={isOpen} toggleModal={toggleModal} title={'Congrats!'} message={'Youre registration is success'}>
      <GoToProfileButtonStyled variant="contained" onClick={() => toggleModal()}> 
        Go to profile &nbsp; <PetsIcon sx={{ transform: 'rotate(45deg)', verticalAlign: 'top', fontSize: '24px' }} />
      </GoToProfileButtonStyled>
    </BasicModal>
  )
}

export default CongratsModal;
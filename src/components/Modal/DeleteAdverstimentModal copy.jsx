import BasicModal from './BasicModal';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { DialogContentTextStyled } from './BasicModal.styled';
import { Box, Button } from '@mui/material';

const DeleteAdverstimentModal = ({ isOpen, toggleModal, addName, onRemove}) => {
  return (
    <BasicModal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={'Delete adverstiment?'}
    >
      <DialogContentTextStyled id="alert-dialog-description">
        Are you sure you want to delete <br /> <strong>“{addName}”?</strong><br />
        You can't undo this action.
      </DialogContentTextStyled>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={toggleModal} variant="outlined" sx={{ width: '125px' }}>Cancel</Button>
        <Button onClick={onRemove} variant="contained" sx={{width: '125px', marginLeft: '15px'}}>
          Yes &nbsp; <DeleteForeverOutlinedIcon sx={{ verticalAlign: 'top', fontSize: '24px' }} />
        </Button>
      </Box>
     
    </BasicModal>
  )
}

export default DeleteAdverstimentModal;
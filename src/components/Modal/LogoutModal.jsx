import BasicModal from './BasicModal';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box, Button } from '@mui/material';

const LogoutModal = ({ isOpen, toggleModal, onLogout}) => {
  return (
    <BasicModal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={'Already leaving?'}
    >
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '30px' }}>
        <Button onClick={toggleModal} variant="outlined" sx={{ width: '125px' }}>Cancel</Button>
        <Button onClick={onLogout} variant="contained" sx={{width: '125px', marginLeft: '15px'}}>
          Yes &nbsp; <LogoutOutlinedIcon sx={{ verticalAlign: 'top', fontSize: '24px', transform: 'rotate(180deg)' }} />
        </Button>
      </Box>
     
    </BasicModal>
  )
}

export default LogoutModal;
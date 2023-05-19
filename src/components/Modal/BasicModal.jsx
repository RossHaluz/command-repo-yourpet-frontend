import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogContentTextStyled, DialogPaperStyled, DialogStyled, DialogTitleStyled } from './BasicModal.styled';

const BasicModal = ({ isOpen, toggleModal, title, message, children }) => {
  return (
    <div>
      <DialogStyled
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperComponent={DialogPaperStyled}
      >
        {title && (
          <DialogTitleStyled>{title}</DialogTitleStyled>
        )}

        <DialogContent>
          {message && (
            <DialogContentTextStyled id="alert-dialog-description">
              {message}
            </DialogContentTextStyled>
          )}
          {children}
        </DialogContent>

        <IconButton
          aria-label="close"
          onClick={toggleModal}
          sx={{
            position: 'absolute',
            right: 15,
            top: 15,
            color: '#54ADFF',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogStyled>
    </div>
  )
}

export default BasicModal;
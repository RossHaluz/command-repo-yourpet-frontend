import { useFormik } from 'formik';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as SearcCrossIcon } from './icons/searchCross.svg';
import {
  MuiBtnSearc,
  MuiBtnSearcCross,
  MuiBtnWrapper,
  MuiFormDesctop,
  MuiFormMobile,
  MuiInputDesctop,
  MuiInputMobile,
} from './NoticesSearch.styled';
import { useMediaQuery } from '@mui/material';

const NoticesSearch = () => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values, actions) => {
      const { search } = values;
      if (search.trim() === '' || search.trim().length > 50) {
        //simple type of validation will be discused
        alert('Invalid query'); // should be kind of toast
      } else {
        //  function that will be used to reqest new limited api date
        actions.resetForm();
      }
    },
  });

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  return (
    <>
      {isMobileScreen ? (
        <MuiFormMobile
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <MuiInputMobile
            id="search"
            name="search"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <MuiBtnWrapper>
            {formik.values.search && (
              <MuiBtnSearcCross type="reset">
                <SearcCrossIcon />
              </MuiBtnSearcCross>
            )}
            <MuiBtnSearc type="submit">
              <SearchIcon />
            </MuiBtnSearc>
          </MuiBtnWrapper>
        </MuiFormMobile>
      ) : (
        <MuiFormDesctop
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <MuiInputDesctop
            id="search"
            name="search"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <MuiBtnWrapper>
            {formik.values.search && (
              <MuiBtnSearcCross type="reset">
                <SearcCrossIcon />
              </MuiBtnSearcCross>
            )}
            <MuiBtnSearc type="submit">
              <SearchIcon />
            </MuiBtnSearc>
          </MuiBtnWrapper>
        </MuiFormDesctop>
      )}
    </>
  );
};

export default NoticesSearch;

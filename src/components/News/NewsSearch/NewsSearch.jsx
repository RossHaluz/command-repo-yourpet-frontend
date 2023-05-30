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
} from './NewsSearch.styled';
import { useMediaQuery } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { searchNews } from 'redux/news/slice';

const NewsSearch = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { search } = values;
      if (search.trim() === '' || search.trim().length > 50) {
        toast.error('Invalid query');
      }
      dispatch(searchNews(search));
      resetForm();
    },
  });

  const handleCrossButtonClick = () => {
    formik.resetForm();
  };

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
              <MuiBtnSearcCross type="reset" onClick={handleCrossButtonClick}>
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

export default NewsSearch;

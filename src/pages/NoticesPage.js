import NoticesSearch from 'components/NoticesSearch';
import { fetchNotices } from 'redux/notices/operations';
import { useState, useEffect } from 'react';
import NoticesCategoriesList from 'components/NoticesCategoriesList';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);

  console.log(notices);

  useEffect(() => {
    document.title = 'YourPet | Find pet';

    fetchNotices()
      .then(data => {
        // console.log(data.data.notices);
        setNotices(data.data.notices);
      })
      .catch(error => {});
  }, []);

  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesList notices={notices} />
    </>
  );
};

export default NoticesPage;

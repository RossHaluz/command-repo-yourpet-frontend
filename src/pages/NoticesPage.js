
import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav/>
      <NoticesAddPetBtn/>
    </>
  )
}

export default NoticesPage;

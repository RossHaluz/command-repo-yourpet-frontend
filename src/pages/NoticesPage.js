
import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesAddPetBtn />
      <NoticesCategoriesList />
    </>
  )
}

export default NoticesPage;

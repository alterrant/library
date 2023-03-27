import { BookingSection, DeliverySection, HistorySection } from 'widgets/profile-section-content';
import { Profile, ProfileModel } from 'features/profile';
import { BookInteractionsModel } from 'features/book-interactions';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { User, UserModel } from 'entities/user';
import { Preloader, Templates } from 'shared/ui';
import { useAppSelector } from 'shared/lib';
import {
  BookingInfo,
  BooksHistory,
  checkIsExpired,
  DeliveryInfo,
  getBookingMaskSubtitle,
  getBookingMaskTitle,
  getDeliveryMaskSubtitle,
  getDeliveryMaskTitle,
  UserInfo,
} from '../lib';

import styles from './profile-page.module.css';

export const ProfilePage = () => {
  const { user: currentUser } = useAppSelector(UserModel.userSelector);

  const isBookingExpired = checkIsExpired(currentUser?.booking?.dateOrder);
  const isDeliveryExpired = checkIsExpired(currentUser?.delivery?.dateHandedTo);

  const bookingMaskTitle = getBookingMaskTitle(isBookingExpired);
  const bookingMaskSubtitle = getBookingMaskSubtitle(isBookingExpired);

  const deliveryMaskTitle = getDeliveryMaskTitle(isDeliveryExpired);
  const deliveryMaskSubtitle = getDeliveryMaskSubtitle(isDeliveryExpired);

  const { isLoading: isUserLoading } = useAppSelector(UserModel.userSelector);
  const { isLoading: isNavLoading } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBookInteractiveLoading } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { isLoading: isBooksLoading } = useAppSelector(BooksModel.booksSelector);
  const { isLoading: isProfileLoading } = useAppSelector(ProfileModel.profileSelector);

  const isLoading = isNavLoading || isBookInteractiveLoading || isBooksLoading || isProfileLoading || isUserLoading;

  return (
    <>
      {isLoading && <Preloader/>}
      <main className={styles.wrapper}>
        <User.PersonInfo isGreeting={false} uploadAvatar={<Profile.UploadAvatar />} />

        <Templates.ProfileSection title={UserInfo.TITLE} helper={UserInfo.HELPER}>
          <Profile.ChangeUserInfo />
        </Templates.ProfileSection>

        <Templates.ProfileSection
          title={BookingInfo.TITLE}
          helper={BookingInfo.HELPER}
          maskTitle={bookingMaskTitle}
          maskSubtitle={bookingMaskSubtitle}
          isEmpty={!currentUser?.booking?.id}
          isExpired={isBookingExpired}
        >
          <BookingSection.UserBooking booking={currentUser.booking} />
        </Templates.ProfileSection>

        <Templates.ProfileSection
          title={DeliveryInfo.TITLE}
          helper={DeliveryInfo.HELPER}
          maskTitle={deliveryMaskTitle}
          maskSubtitle={deliveryMaskSubtitle}
          isEmpty={!currentUser?.delivery?.id}
          isExpired={isDeliveryExpired}
        >
          <DeliverySection.UserDelivery delivery={currentUser.delivery} />
        </Templates.ProfileSection>

        <Templates.ProfileSection
          title={BooksHistory.TITLE}
          helper={BooksHistory.HELPER}
          maskTitle={BooksHistory.MASK_TITLE}
          isEmpty={!currentUser?.history?.id}
          sectionDataTestId='history'
        >
          <HistorySection.UserBooksHistory history={currentUser.history} />
        </Templates.ProfileSection>
      </main>
    </>
  );
};

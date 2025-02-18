'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside, useScreenSize } from '@/shared';
import {
  ContactUsModal,
  ContactUsSection,
  Header,
  MainBanner,
} from '@/widgets';
import './page.scss';

export default function Index() {
  const { breakpoints } = useScreenSize();
  const [isShowModal, setIsShowModal] = useState(false);
  const contactUsModalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(contactUsModalRef, () => setIsShowModal(false));
  const onClickContactUs = useCallback(() => {
    if (breakpoints.tabletLate) {
      setIsShowModal(true);
    }
  }, [breakpoints]);

  useEffect(() => {
    if (breakpoints.maxMobileLate) {
      setIsShowModal(false);
    }
  }, [breakpoints]);

  return (
    <div className='index'>
      <Header />
      <MainBanner onClickContactUs={onClickContactUs} />
      {/*<Description />*/}
      {/*<Partners />*/}
      {/*<Projects />*/}
      {breakpoints.maxMobileLate && <ContactUsSection />}
      <ContactUsModal
        ref={contactUsModalRef}
        isShow={breakpoints.tablet && isShowModal}
      />
    </div>
  );
}

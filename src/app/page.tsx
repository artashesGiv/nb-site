'use client';

import { useRef, useState } from 'react';
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

  return (
    <div className='index'>
      <Header />
      <MainBanner onClickContactUs={() => setIsShowModal(true)} />
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

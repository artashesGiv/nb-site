'use client';

import { useScreenSize } from '@/shared';
import { ContactUsModal, ContactUsSection, Header } from '@/widgets';
import './page.scss';

export default function Index() {
  const { breakpoints } = useScreenSize();

  return (
    <div className='index'>
      <Header />
      {/*<MainBanner />*/}
      {/*<Description />*/}
      {/*<Partners />*/}
      {/*<Projects />*/}
      {breakpoints.maxMobileLate && <ContactUsSection />}
      <ContactUsModal isShow={breakpoints.tablet} />
    </div>
  );
}

import { Header } from '@/widgets';
import { MainBanner } from '@/widgets/MainBanner';

import './page.scss';

export default function Index() {
  return (
    <div className='index'>
      <Header />
      <MainBanner />
    </div>
  );
}

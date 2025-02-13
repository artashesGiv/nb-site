import { Header, MainBanner } from '@/widgets';

// import { MainBanner } from '@/widgets';
import './page.scss';

export default function Index() {
  return (
    <div className='index'>
      <Header />
      <MainBanner />
    </div>
  );
}

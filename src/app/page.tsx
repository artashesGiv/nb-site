import { Header, Partners } from '@/widgets';
import './page.scss';

export default function Index() {
  return (
    <div className='index'>
      <Header />
      {/*<MainBanner />*/}
      {/*<Description />*/}
      <Partners />
    </div>
  );
}

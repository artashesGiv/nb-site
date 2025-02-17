import { Description, Header, MainBanner, Services } from '@/widgets';
import './page.scss';

export default function Index() {
  return (
    <div className='index'>
      <Header />
      <MainBanner />
      <Description />
      {/*<Partners />*/}
      <Services />
    </div>
  );
}

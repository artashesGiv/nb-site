import { Header, Projects } from '@/widgets';
import './page.scss';

export default function Index() {
  return (
    <div className='index'>
      <Header />
      {/*<MainBanner />*/}
      {/*<Description />*/}
      {/*<Partners />*/}
      <Projects />
    </div>
  );
}

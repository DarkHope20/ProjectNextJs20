import { useRouter } from 'next/router';
import Layout from '..components/layout';
import SummaryCard from '..components/summary-card-container';
import LatestNewsContainer from '../components/latest-news-container';
import Footer from '../components/footer';
import '../pages/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="app">
      <main className="content">
        {router.pathname === '/layout' && <Layout />}
        {router.pathname === '/summary-card-container' && <SummaryCard />}
        {router.pathname === '/latest-news-container' && <LatestNewsContainer />}
        {router.pathname === '/footer' && <Footer />}
      </main>
    </div>
  );
}

export default MyApp;


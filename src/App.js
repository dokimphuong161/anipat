import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import img from '~/assets/images/hero-slide.png';
import HeroSlide from './pages/Home/HeroSlide/HeroSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '~/swiper.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <HeroSlide />
            </Layout>
        </BrowserRouter>
    );
}

export default App;

import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Home from '../pages/Home';

function Main() {
    return (
        <div className="main-wrapper">
            <Header />
            <HeroSection />
            <Home />
            <Footer />
        </div>
    );
}

export default Main;

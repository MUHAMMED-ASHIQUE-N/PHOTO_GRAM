import { useState, type FC } from 'react';
import Navigation from './components/Navigation';
import UploadPost from './components/UploadPost';
import Feed from './components/Feed';
import Footer from './components/Footer';

const Home: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="max-w-2xl mx-auto py-8">
                <UploadPost />
                <Feed />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
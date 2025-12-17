import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import RightBar from './components/RightBar/RightBar';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Имитация загрузки - 2.5 секунды
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Если грузится - показываем заставку
    if (isLoading) {
        return <SplashScreen />;
    }

    // Иначе - само приложение
    return (
        <Layout
            sidebar={<Sidebar />}
            feed={<Feed />}
            rightbar={<RightBar />}
        />
    );
}

export default App;
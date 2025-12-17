import icon from '../../assets/icons/logo.svg'; // Используем твою иконку лого
import './SplashScreen.css';

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            {/* Логотип по центру */}
            <div className="splash-logo-container">
                <img src={icon} alt="Instagram" className="splash-icon" />
            </div>

            {/* Надпись внизу */}
            <div className="splash-footer">
                <span className="from-text">from</span>
                <div className="meta-logo-wrapper">
                    <span className="meta-text">Meta</span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
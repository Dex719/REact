import {useState} from 'react';
import './Sidebar.css';

// --- ИМПОРТ КАРТИНОК ---
import Logo from './Logo';
// Главная
import homeIcon from '../../assets/icons/home.svg';
import homeFilled from '../../assets/icons/home-filled.svg';
// Поиск
import searchIcon from '../../assets/icons/search.svg';
import searchFilled from '../../assets/icons/search-filled.svg';
// Интересное
import exploreIcon from '../../assets/icons/explore.svg';
import exploreFilled from '../../assets/icons/explore-filled.svg';
// Reels
import reelsIcon from '../../assets/icons/reels.svg';
import reelsFilled from '../../assets/icons/reels-filled.svg';
// Сообщения
import msgIcon from '../../assets/icons/messenger.svg';
import msgFilled from '../../assets/icons/messenger-filled.svg';
// Уведомления
import heartIcon from '../../assets/icons/heart.svg';
import heartFilled from '../../assets/icons/heart-filled.svg';
// Создать
import createIcon from '../../assets/icons/create.svg';
// Меню
import menuIcon from '../../assets/icons/menu.svg';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('Главная');

    const menuItems = [
        {
            label: "Главная",
            icon: homeIcon,
            activeIcon: homeFilled
        },
        {
            label: "Поисковый запрос",
            icon: searchIcon,
            activeIcon: searchFilled,
            isSearch: true
        },
        {
            label: "Интересное",
            icon: exploreIcon,
            activeIcon: exploreFilled
        },
        {
            label: "Reels",
            icon: reelsIcon,
            activeIcon: reelsFilled
        },
        {
            label: "Сообщения",
            icon: msgIcon,
            activeIcon: msgFilled,
            isMessages: true,
            badge: 3
        },
        {
            label: "Уведомления",
            icon: heartIcon,
            activeIcon: heartFilled,
            hasDot: true
        },
        {
            label: "Создать",
            icon: createIcon,
            activeIcon: createIcon
        },
        {
            label: "Профиль",
            isProfile: true,
            img: "https://i.pravatar.cc/150?img=60"
        },
    ];

    const formatBadgeCount = (count) => {
        return count > 99 ? '99+' : count;
    };

    return (
        <div className="sidebar">
            <div className="sidebar__logo-container">
                <Logo className="sidebar-logo-svg"/>
            </div>

            <nav className="sidebar__menu">
                {menuItems.map((item, index) => {
                    const isActive = activeTab === item.label;
                    // Выбираем путь к картинке: активная или обычная
                    const iconSrc = isActive ? item.activeIcon : item.icon;

                    return (
                        <div
                            key={index}
                            className={`menu-item ${isActive ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.label)}
                        >
                            <div className="icon-wrapper">
                                {item.isProfile ? (
                                    <img
                                        src={item.img}
                                        alt="Profile"
                                        className={`profile-icon ${isActive ? 'active-border' : ''}`}
                                    />
                                ) : (
                                    // ТЕПЕРЬ ЭТО ПРОСТО IMG
                                    <img
                                        src={iconSrc}
                                        alt={item.label}
                                        className="nav-icon"
                                        // Если это поиск и активен — можно чуть увеличить жирность через стили, но лучше просто разная картинка
                                    />
                                )}

                                {item.isMessages && item.badge > 0 && (
                                    <div className="messages-badge">{formatBadgeCount(item.badge)}</div>
                                )}

                                {item.hasDot && (
                                    <div className="notification-dot"></div>
                                )}
                            </div>

                            <span className={`label ${isActive ? 'bold-text' : ''}`}>
                {item.label}
              </span>
                        </div>
                    );
                })}
            </nav>

            <div className="sidebar__footer">
                <div className="menu-item">
                    {/* ОБЯЗАТЕЛЬНО добавляем wrapper, чтобы отступ был как у всех */}
                    <div className="icon-wrapper">
                        <img src={menuIcon} alt="Menu" className="nav-icon"/>
                    </div>
                    <span className="label">Ещё</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
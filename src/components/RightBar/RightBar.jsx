import { useEffect, useState } from 'react';
import axios from 'axios';
import Suggestion from '../Suggestion.jsx';
import './RightBar.css';

const RightBar = () => {
    const [user, setUser] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        axios.get('https://dae48ca44029e8c3.mokky.dev/contents')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data[0] : res.data;
                if(data) {
                    setUser(data.currentUser);
                    setSuggestions(data.suggestions || []);
                }
            })
            .catch(err => console.log(err));
    }, []);

    if (!user) return null; // Или скелетон

    return (
        <div className="right-bar">
            {/* Ваш профиль */}
            <div className="my-profile">
                <div className="profile-pic-wrapper">
                    <img src={user.avatar} alt="me" />
                </div>
                <div className="profile-info">
                    <div className="profile-login">{user.username}</div>
                    <div className="profile-name">{user.fullName}</div>
                </div>
                <button className="switch-btn">Переключиться</button>
            </div>

            {/* Заголовок */}
            <div className="suggestions-header">
                <span>Рекомендации для вас</span>
                <button className="see-all">Все</button>
            </div>

            {/* Список */}
            <div className="suggestions-list">
                {suggestions.map((item) => (
                    <Suggestion key={item.id} data={item} />
                ))}
            </div>

            <div className="right-footer">
                <p>Информация • Помощь • Пресса • API • Вакансии • Конфиденциальность • Условия • Места • Язык • Meta Verified</p>
                <p style={{marginTop: '20px'}}>© 2025 INSTAGRAM CLONE</p>
            </div>
        </div>
    );
};

export default RightBar;
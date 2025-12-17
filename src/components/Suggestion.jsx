import { useState } from 'react';
import VerifiedIcon from './VerifiedIcon.jsx';

const Suggestion = ({ data }) => {
    // Тоже 30% шанс на галочку
    const [isVerified] = useState(() => Math.random() > 0.7);

    return (
        <div className="suggestion-item">
            <div className="suggestion-avatar">
                <img src={data.avatar} alt={data.username} />
            </div>
            <div className="suggestion-info">
                <div className="s-login" style={{ display: 'flex', alignItems: 'center' }}>
                    {data.username}
                    {isVerified && <VerifiedIcon size={12} />}
                </div>
                <div className="s-desc">{data.subtitle}</div>
            </div>
            <button className="follow-btn">Подписаться</button>
        </div>
    );
};

export default Suggestion;
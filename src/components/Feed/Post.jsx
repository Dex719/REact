import { useState } from 'react';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import VerifiedIcon from '../VerifiedIcon'; // Импорт иконки

const Post = ({ data }) => {
    const { author, content, stats } = data;

    // Генерируем "случайность" один раз при создании компонента.
    // Шанс 40%, что будет галочка (Math.random() > 0.6)
    const [isVerified] = useState(() => Math.random() > 0.6);

    const fakeCommentsCount = Math.floor(stats.likes / 2);

    return (
        <article className="post">
            <div className="post-header">
                <div className="post-author">
                    <img src={author.avatar} alt={author.username} className="post-avatar-img" />

                    {/* Имя + Галочка */}
                    <span className="username" style={{ display: 'flex', alignItems: 'center' }}>
                        {author.username}
                        {isVerified && <VerifiedIcon size={12} />}
                    </span>

                    <span className="time">• {content.timeAgo}</span>
                </div>
                <MoreHorizontal className="icon-btn" />
            </div>

            <div className="post-image-container">
                <img src={content.image} alt="Post content" className="post-image" />
            </div>

            <div className="post-actions">
                <div className="left-actions">
                    <div className="like-wrapper">
                        <Heart size={26} className="icon-btn" />
                        {stats.likes > 0 && (
                            <span className="like-count">{stats.likes}</span>
                        )}
                    </div>
                    <MessageCircle size={26} className="icon-btn" />
                    <Send size={26} className="icon-btn" />
                </div>
                <Bookmark size={26} className="icon-btn" />
            </div>

            <div className="post-details">
                <div className="caption">
                    <span className="username">{author.username}</span> {content.caption}
                </div>

                {fakeCommentsCount > 0 && (
                    <div className="view-comments">
                        Посмотреть все комментарии ({fakeCommentsCount})
                    </div>
                )}
            </div>
        </article>
    );
};

export default Post;
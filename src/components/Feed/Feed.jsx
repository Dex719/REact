import { useEffect, useState } from 'react';
import axios from 'axios';
import StoriesBar from '../Stories/StoriesBar';
import Post from './Post';
import './Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Укажите URL к вашему JSON-файлу на Mokky
        // Если вы сделали структуру как я написал (один большой JSON):
        axios.get('https://dae48ca44029e8c3.mokky.dev/contents')
            .then(res => {
                // Mokky иногда возвращает просто объект, иногда массив (если создали ресурс)
                // Проверка, так как mokky может вернуть { "stories": ... } напрямую
                const data = Array.isArray(res.data) ? res.data[0] : res.data;

                if (data) {
                    setStories(data.stories || []);
                    setPosts(data.posts || []);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка при загрузке ленты:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div style={{ color: 'white', marginTop: 50 }}>Загрузка...</div>;
    }

    return (
        <div className="feed-wrapper">
            {/* Блок сторис - широкий */}
            <div className="stories-container-wrapper">
                <StoriesBar stories={stories} />
            </div>

            {/* Лента постов - узкая */}
            <div className="posts-stream">
                {posts.map(post => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
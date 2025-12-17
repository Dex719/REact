import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StoryItem from './StoryItem';
import './Stories.css';

const StoriesBar = ({ stories }) => {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    // Функция проверки скролла (показывать стрелки или нет)
    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Показываем левую, если прокрутили хоть немного
        setShowLeft(scrollLeft > 0);

        // Показываем правую, если есть куда крутить (с небольшим запасом в 1px)
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    // Слушаем событие скролла
    useEffect(() => {
        checkScroll();
        // Добавляем listener на случай ресайза окна
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [stories]); // Пересчитываем, если пришли новые сторис

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;

        // Ширина одного скролла = примерно 4 сториса (320px)
        // Это обеспечит "целостность" прокрутки
        const scrollAmount = 320;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    if (!stories) return null;

    return (
        <div className="stories-wrapper">
            {/* Левая кнопка */}
            {showLeft && (
                <button className="story-nav-btn left" onClick={() => scroll('left')}>
                    <ChevronLeft size={24} color="#000" />
                </button>
            )}

            {/* Контейнер сторис */}
            <div
                className="stories-bar"
                ref={scrollRef}
                onScroll={checkScroll}
            >
                {stories.map(story => (
                    <StoryItem key={story.id} story={story} />
                ))}
            </div>

            {/* Правая кнопка */}
            {showRight && (
                <button className="story-nav-btn right" onClick={() => scroll('right')}>
                    <ChevronRight size={24} color="#000" />
                </button>
            )}
        </div>
    );
};

export default StoriesBar;
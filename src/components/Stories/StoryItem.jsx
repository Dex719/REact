const StoryItem = ({ story }) => {
    return (
        <div className="story-item">
            <div className="story-ring">
                <img src={story.avatar} alt={story.username} className="story-avatar" />
            </div>
            <span className="story-name">{story.username}</span>
        </div>
    );
};

export default StoryItem;
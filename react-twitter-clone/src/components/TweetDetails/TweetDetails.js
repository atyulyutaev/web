import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TweetDetails = ({ tweets, setTweets }) => {
    const navigate = useNavigate();
    const tweetId = useParams().tweetId;
    const tweet = tweets.find(t => t.id === parseInt(tweetId));

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(tweet?.text || "");

    const handleDelete = () => {
        setTweets(prevTweets => prevTweets.filter(t => t.id !== parseInt(tweetId)));
        navigate("/");
    };

    const handleEdit = () => {
        if (isEditing) {
            setTweets(prevTweets => prevTweets.map(t => t.id === parseInt(tweetId) ? {...t, text: editedText} : t));
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    if (!tweet) return <p>Tweet not found!</p>;

    return (
        <div className="tweet-details">
            {isEditing ?
                <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                : <h2>{tweet.text}</h2>}

            {tweet.image && <img src={tweet.image} alt="Tweet content" />}

            <p>Likes: {tweet.likes}</p>
            <p>Dislikes: {tweet.dislikes}</p>

            <button onClick={handleDelete}>Delete Tweet</button>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </div>
    );
}

export default TweetDetails;

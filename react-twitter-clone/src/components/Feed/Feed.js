import React, { useState } from 'react';
import Tweet from '../Tweet/Tweet';

function Feed() {
    const [tweets, setTweets] = useState([
        // Example initial data
        { id: 1, text: "Hello World!", likes: 0, dislikes: 0, image: null },
        // Add more tweets as required...
    ]);

    const [newTweetText, setNewTweetText] = useState('');
    const [newTweetImage, setNewTweetImage] = useState('');

    const handleLike = (tweetId) => {
        const updatedTweets = tweets.map(tweet => {
            if (tweet.id === tweetId) {
                return { ...tweet, likes: tweet.likes + 1 };
            }
            return tweet;
        });
        setTweets(updatedTweets);
    };

    const handleDislike = (tweetId) => {
        const updatedTweets = tweets.map(tweet => {
            if (tweet.id === tweetId) {
                return { ...tweet, dislikes: tweet.dislikes + 1 };
            }
            return tweet;
        });
        setTweets(updatedTweets);
    };

    const addTweet = () => {
        const newTweet = {
            id: tweets.length + 1,
            text: newTweetText,
            likes: 0,
            dislikes: 0,
            image: newTweetImage // added image to the new tweet
        };
        setTweets(prevTweets => [...prevTweets, newTweet]);
        setNewTweetText(''); // Clear the input after submitting
        setNewTweetImage(''); // Clear the image input after submitting
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newTweetText}
                    onChange={(e) => setNewTweetText(e.target.value)}
                    placeholder="What's happening?"
                />
                <input
                    type="text"
                    value={newTweetImage}
                    onChange={(e) => setNewTweetImage(e.target.value)}
                    placeholder="Image URL"
                />
                <button onClick={addTweet}>Tweet</button>
            </div>
            {tweets.map(tweet => (
                <Tweet
                    key={tweet.id}
                    id={tweet.id}
                    text={tweet.text}
                    likes={tweet.likes}
                    dislikes={tweet.dislikes}
                    image={tweet.image}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                />
            ))}
        </div>
    );
}

export default Feed;

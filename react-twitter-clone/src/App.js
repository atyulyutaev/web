import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import TweetDetails from './components/TweetDetails/TweetDetails';
import Header from './components/Header/Header';
import './App.css';

function App() {
    const [tweets, setTweets] = useState([]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Feed tweets={tweets} setTweets={setTweets} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tweet/:tweetId" element={<TweetDetails tweets={tweets} setTweets={setTweets} />} />
            </Routes>
        </Router>
    );
}

export default App;

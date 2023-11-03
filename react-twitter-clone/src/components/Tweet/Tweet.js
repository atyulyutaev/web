import React from 'react';
import { Link } from 'react-router-dom';

function Tweet({ id, text, image, likes, dislikes, handleLike, handleDislike }) {
    // Log to see if the text is correctly passed
    console.log("Tweet text:", text);

    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px', textAlign: 'center' }}>
            <Link to={`/tweet/${id}`}>
                <h4 style={{color: 'black', background: 'white'}}>{text}</h4>
                {image && <img src={image} alt="tweet" style={{ width: '200px', height: '200px' }} />}
            </Link>
            <div>
                <span>Likes: {likes}</span>
                <button onClick={() => handleLike(id)}>Like</button>
                <span>Dislikes: {dislikes}</span>
                <button onClick={() => handleDislike(id)}>Dislike</button>
            </div>
        </div>
    );
}

export default Tweet;

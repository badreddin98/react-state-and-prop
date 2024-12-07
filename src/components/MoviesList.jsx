import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Social Network', genre: 'Drama', description: 'A story about the founding of Facebook.', showDetails: false },
        { id: 2, title: 'Iron Man', genre: 'Action', description: 'Tony Stark builds a high-tech suit to save the world.', showDetails: false },
        { id: 3, title: 'The Matrix', genre: 'Action', description: 'A programmer discovers the truth about his reality.', showDetails: false },
        { id: 4, title: 'A Beautiful Mind', genre: 'Drama', description: 'The story of mathematician John Nash.', showDetails: false }
    ]);

    const [showOnlyAction, setShowOnlyAction] = useState(false);

    const toggleDetails = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id 
                ? { ...movie, showDetails: !movie.showDetails }
                : movie
        ));
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const displayedMovies = showOnlyAction 
        ? movies.filter(movie => movie.genre === 'Action')
        : movies;

    return (
        <div className="movies-list">
            <h1>My Favorite Movies</h1>
            
            <button 
                onClick={() => setShowOnlyAction(!showOnlyAction)}
                className="toggle-view-btn"
            >
                {showOnlyAction ? 'Show All Movies' : 'Show Only Action Movies'}
            </button>

            <ul className="movies-container">
                {displayedMovies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <div className="movie-header">
                            <h3 onClick={() => toggleDetails(movie.id)} style={{cursor: 'pointer'}}>
                                {movie.title} ({movie.genre})
                            </h3>
                            <button 
                                onClick={() => removeMovie(movie.id)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                        
                        {movie.showDetails && (
                            <p className="movie-description">{movie.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;

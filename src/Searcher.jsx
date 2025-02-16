import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'antd';

function MovieCard({ movie }) {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex mb-4">
            {/* Image (left) */}
            <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-40 h-64 object-cover"
            />

            {/* Content (right) */}
            <div className="p-4 flex flex-col justify-between w-full">
                <div>
                    <h2 className="text-xl font-semibold text-blue-600 mb-2">{movie.title}</h2>
                    <p className="text-gray-700 text-sm">{movie.description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button
                        className={`focus:outline-none ${liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                        onClick={toggleLike}
                    >
                        <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} size="lg" />
                    </button>
                    <Button type="primary" className="bg-blue-500 hover:bg-blue-700">
                        Посмотреть
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Searcher() {
    const movies = Array.from({ length: 25 }).map((_, index) => ({
        id: index + 1,
        title: `Фильм ${index + 1}`,
        description: `Краткое описание фильма ${index + 1}.`,
        imageUrl: 'https://33.mchs.gov.ru/uploads/resize_cache/news/2021-12-27/pozdravlenie-prezidenta-rossii-vladimira-putina-s-dnem-spasatelya_1640590179634845235__2000x2000.jpg',
    }));

    return (
        <div className="container mx-auto py-8">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Searcher;
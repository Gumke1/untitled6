import { Input, Button, Space, Typography } from 'antd';
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Search } = Input;


export function Header() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = (value) => {
        console.log('Searching for:', value);
        setSearchValue(value);


        navigate(`/search?q=${value}`);
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <header className="bg-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between">

                <div className="flex items-center">
                    <Title level={3} style={{ margin: 0 }}>
                        <a href="/" className="text-blue-600 hover:text-blue-800 transition duration-200">
                            Название сайта
                        </a>
                    </Title>
                </div>


                <Space size="middle">
                    <Search
                        placeholder="Поиск..."
                        prefix={<SearchOutlined />}
                        className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        style={{ width: '300px' }}
                        enterButton
                        onSearch={handleSearch}
                        value={searchValue}
                        onChange={handleInputChange}
                    />

                    <Button type="primary" className="bg-blue-600 hover:bg-blue-700 transition duration-200">
                        <Link to="/log" style={{ color: 'white', textDecoration: 'none' }}>
                            Войти
                        </Link>
                    </Button>

                    <Button className="text-blue-600 border border-blue-600 hover:bg-blue-100 transition duration-200">
                        <Link to="/registr" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Зарегистрироваться
                        </Link>
                    </Button>
                </Space>
            </div>
        </header>
    );
}


export function Scroll(title) {
    const scrollContainerRef = useRef(null);
    const imageCount = 25
    const [likedItems, setLikedItems] = useState({});

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container) {
            return;
        }

        const handleWheel = (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };
        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleLikeClick = (index) => {
        setLikedItems((prevLikedItems) => ({
            ...prevLikedItems,
            [index]: !prevLikedItems[index],
        }));
    };

    return (
        <section className="bg-white py-4 shadow-md">
            <div className="container mx-auto px-4">
                <hgroup>
                    <h3 className="ipc-title__text">{title.title}</h3>
                </hgroup>

                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto whitespace-nowrap py-4"
                >
                    {Array.from({ length: imageCount }).map((_, index) => (
                        <div
                            key={index}
                            className="inline-block w-36 h-64 mr-4 overflow-hidden rounded-md shadow-md relative"
                        >
                            <img
                                src={`https://33.mchs.gov.ru/uploads/resize_cache/news/2021-12-27/pozdravlenie-prezidenta-rossii-vladimira-putina-s-dnem-spasatelya_1640590179634845235__2000x2000.jpg`}
                                alt={`Image ${index + 1}`}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-2 pt-1 flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-semibold mb-0 truncate">Image Title {index + 1}</h4>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs mt-1">
                                        Посмотреть
                                    </button>
                                </div>
                                <button
                                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                                    onClick={() => handleLikeClick(index)}
                                >
                                    {likedItems[index] ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Header
Scroll;

import  { useState } from 'react';
import axios from 'axios';

function Registr() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                nickname: nickname,
                email: email,
                password: password,
            });

            console.log('Success:', response.data);
            alert(response.data.message);


        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);

            let errorMessage = 'Registration failed. Please try again later.'; //

            if (error.response && error.response.data && error.response.data.detail) {
                errorMessage = error.response.data.detail; //
            } else if (error.message) {
                errorMessage = error.message;
            }
            alert('Registration Failed: ' + errorMessage);
        }
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm mx-auto border-2">
            <h2 className="text-center text-2xl font-semibold text-blue-600 mb-6">Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
                        Никнейм
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nickname"
                        type="text"
                        placeholder="Введите никнейм"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Почта
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Введите почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Пароль
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6"> {/* Заменили mb-6 на mb-4 */}
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword"> {/* Исправили htmlFor */}
                        Подтвердите пароль
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"  // Исправили id
                        type="password"
                        placeholder="Подтвердите пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>

                </div>
            </form>

        </div>
    );
}

export default Registr;
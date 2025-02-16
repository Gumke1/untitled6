import { useState } from 'react';
import axios from 'axios'; // Import axios

function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/localhost/login', {
                nickname: nickname,
                password: password,
            });

            console.log('Success:', response.data);
            alert('Login Successful!');



        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Login Failed: ' + (error.response ? error.response.data.message : error.message));

        }
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm mx-auto border-2">
            <h2 className="text-center text-2xl font-semibold text-blue-600 mb-6">Вход</h2>
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

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Пароль
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Войти
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Забыли пароль?
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;
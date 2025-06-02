import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-md">
            <h1 className="text-2xl font-bold">🎵 음악학원</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/">소개</Link></li>
                    <li><Link to="/teachers">강사진</Link></li>
                    <li><Link to="/curriculum">수업안내</Link></li>
                    <li><Link to="/contact">문의하기</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

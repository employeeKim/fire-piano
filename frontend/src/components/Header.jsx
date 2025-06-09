import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="logo">
                    <img src={logo} alt="로고" className="logo-img" />
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">소개</Link></li>
                        <li><Link to="/teachers">강사진</Link></li>
                        <li><Link to="/curriculum">수업안내</Link></li>
                        <li><Link to="/contact">문의하기</Link></li>
                        <li><Link to="/login">로그인</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

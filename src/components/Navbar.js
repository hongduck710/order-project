import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <h1>🌼앱만들기🌼</h1>
            <nav>
                <Link to="/">메인화면</Link>
                <Link to="/users">회원 목록</Link>
                <Link to="/books">도서 목록</Link>
            </nav>
        </header>
    );
}

export default Navbar;
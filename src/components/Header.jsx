import React from 'react';
import SearchBar from './SearchBar';
import './Header.scss'; // 필요시 추가 스타일 파일

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Pexels Clone</h1>
            <SearchBar />
        </header>
    );
};

export default Header;
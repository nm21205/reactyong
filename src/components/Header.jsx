// src/components/Header.jsx
import React from 'react';
import SearchBar from './SearchBar';
import { FcPicture } from "react-icons/fc";
import '../styles/header.scss';


const Header = () => {
    return (
        
        <div className="header">
            <div>
                <h1>Pexels</h1>
            </div>
            <div className="head">
                <div>
                <FcPicture size={50}/>
                <h2 className="header__title">Pexels Clone</h2>
                </div>
            <SearchBar/>
            </div>
        </div>
    );
};

export default Header;
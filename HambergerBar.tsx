import {FC, useState} from "react";
import naruto from "./naruto.jpg";
import styled from "styled-components";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaCross, FaHamburger } from "react-icons/fa";
import { RiCrossLine, RiCrosshair2Line, RiCrosshairLine } from "react-icons/ri";
import { BiCross } from "react-icons/bi";
import { IoMdRemove } from "react-icons/io";


const HomePage:FC = () => {
    const [isSideBarActive, setIsSideBarActive] = useState(false);
    const toggleNav = () => {
        const sidenav = document.getElementById('mySidenav') as HTMLDivElement;

        if (sidenav.style.left === '0px') {
            sidenav.style.left = '-100%';
            setIsSideBarActive(false);
        } else {
            sidenav.style.left = '0px';
            setIsSideBarActive(true);
        }
    };
    
    return(
        <HomePageBackground>
            <div className="sidenav" id="mySidenav">
                <a href="/#">Link 1</a>
                <a href="/#">Link 2</a>
                <a href="/#">Link 3</a>
                <a href="/#">Link 4</a>
            </div>
            <button id="toggle-btn" onClick={toggleNav}>{isSideBarActive === true ? (<h1 style={{fontSize:"20px" , width:"20px"}}>X</h1>) : (<HamburgerIcon className="hhhh"/>)}</button>
        </HomePageBackground>
    )
}

export default HomePage;

const HomePageBackground = styled.section`
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
overflow-x: hidden;

    .sidenav {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: -100%;
        background-color: #d4d4d4;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    #toggle-btn {
        position: fixed;
        left: 10px;
        top: 10px;
        cursor: pointer;
        z-index: 1;
        border: none;
        transition: 0.5s;
    }
        .hhhh{
            color:black;
            // background:white;
            width:30px;
            height:30px;
        }

    #main-content {
        transition: margin-left 0.5s;
        padding: 16px;
        border:2px solid red;
        // left:0;
        margin-left:0px;
        width:100%;
    }
`;

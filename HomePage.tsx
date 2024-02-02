import {FC} from "react";
import naruto from "./naruto.jpg";
import styled from "styled-components";

// const naruto1:ComponentType<any> = lazy(() => import("./naruto.jpg"));

const HomePage:FC = () => {
    
    return(
        <HomePageBackground>
            <div className="container">
                <div className="product-card">
                    <div className="product-image" style={{backgroundImage: `url(${naruto})`}}></div>
                    <div className="product-title">Product 1</div>
                    <div className="product-rating">*****</div>
                    <div className="product-stock">10</div>
                    <div className="product-price">₹100.00/-</div>
                    <div className="card-buttons">
                        <button className="card_add_btn">Add</button>
                        <button className="card_info_btn">Info</button>
                        <button className="card_buy_btn">Buy</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image" style={{backgroundImage: `url(${naruto})`}}></div>
                    <div className="product-title">Product 1</div>
                    <div className="product-rating">*****</div>
                    <div className="product-stock">10</div>
                    <div className="product-price">₹100.00/-</div>
                    <div className="card-buttons">
                        <button className="card_add_btn">Add</button>
                        <button className="card_info_btn">Info</button>
                        <button className="card_buy_btn">Buy</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image" style={{backgroundImage: `url(${naruto})`}}></div>
                    <div className="product-title">Product 1</div>
                    <div className="product-rating">*****</div>
                    <div className="product-stock">10</div>
                    <div className="product-price">₹100.00/-</div>
                    <div className="card-buttons">
                        <button className="card_add_btn">Add</button>
                        <button className="card_info_btn">Info</button>
                        <button className="card_buy_btn">Buy</button>
                    </div>
                </div>
            </div>
        </HomePageBackground>
    )
}

export default HomePage;

const HomePageBackground = styled.section`
margin:0;
padding:0;
background:#f4f4f4;
font-size:16px;
    .container{
        max-width:1200px;
        margin:0 auto;
        display:flex;
        justify-content:space-around;
        padding:20px;
        flex-wrap:wrap;
    }
        .container .product-card{
            width:300px;
            background:white;
            border-radius:8px;
            box-shadow:0 4px 8px rgba(0,0,0,0.1); 
            padding:20px;
            margin:20px;
            cursor:pointer;
            position:relative;
        }
            .container .product-card .product-image{
                width:100%;
                height:200px;
                background:white;
                border-radius:4px;
                background-position:center;
                background-size:cover;
                margin-bottom:10px;
            }
            .container .product-card .product-title{
                font-size:18px;
                font-weight:bold;
                margin-bottom:10px;
            }
            .container .product-card .product-stock{
                // border:2px solid green;
                position:absolute;
                top:-5px;
                right:10px;
                border-radius:0 0 4px 4px;
                background:#ff763b;
                color:white;
            }
            .container .product-card .product-rating{
                font-size:18px;
                margin-bottom:10px;
            }
            .container .product-card .product-price{
                margin-bottom:10px;
            }
            .container .product-card .card-buttons{
                display:flex;
                justify-content:space-between;
            }
                .container .product-card .card-buttons button{
                    padding:0 10px;
                    border-radius:4px;
                    color:white;
                    background:rgb(255, 118, 59);
                }
                .container .product-card .card-buttons button:hover{
                    transform:scale(1.05);
                    background:rgb(255, 148, 99);
                }
`;
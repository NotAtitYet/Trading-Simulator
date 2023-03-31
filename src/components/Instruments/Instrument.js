import React from "react";
import './instruments.css';
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const Instrument = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="instruMain">
                <div className="instruBg">
                    <img className="landingBg1" src="../assets/bg4.jpg" alt="" />
                    <img className="landingBg2" src="../assets/bg1.png" alt="" />
                </div>
                <div className="instruBoxContainer">
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Stocks</h1>
                            <p className="contentPara">The stock market is a platform where publicly traded companies issue and sell shares to investors in exchange for capital. Investors can then buy or sell these shares, hoping to make a profit on their investment. The stock market is an essential part of the global financial system and serves as a vital source of funding for companies to expand and grow their businesses. Stock prices are affected by a range of factors, including economic indicators, company performance, and geopolitical events. </p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/crypto">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Mutual Funds</h1>
                            <p className="contentPara">Mutual funds are investment vehicles that pool money from multiple investors to buy a diversified portfolio of securities, such as stocks, bonds, and other assets. They are professionally managed, offering investors access to a range of investment opportunities that they might not be able to access on their own. Mutual funds provide a convenient and cost-effective way to invest in the financial markets, allowing investors to benefit from economies of scale and professional expertise.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Bonds</h1>
                            <p className="contentPara">Bonds are debt securities that represent a loan given to an entity, such as a corporation, government, or municipality, in exchange for regular interest payments and the return of the principal at maturity. Bonds are a common form of fixed-income investment, offering investors a predictable stream of income and a lower risk than equities. Bond prices are affected by interest rates, credit ratings, and other factors, and can provide capital gains or losses depending on market conditions.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Instrument;
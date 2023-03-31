import React from "react";
import './tradingInstruments.css';
const TradingInstruments = () => {
    return(
        <>
            <div className="tradingInstrumentsMain">
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Stocks</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>The stock market is a platform where publicly traded companies issue and sell shares to investors in exchange for capital. Investors can then buy or sell these shares, hoping to make a profit on their investment. The stock market is an essential part of the global financial system and serves as a vital source of funding for companies to expand and grow their businesses. Stock prices are affected by a range of factors, including economic indicators, company performance, and geopolitical events. The stock market offers opportunities for investors to build wealth, but it is also a complex and risky environment that requires careful research, analysis, and planning. To succeed in the stock market, investors need to have a thorough understanding of market dynamics, investment strategies, and risk management techniques. With the right knowledge and approach, investors can potentially earn substantial returns and achieve their financial goals.</p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to stocks page</h2>
                        <button>Go</button>
                    </div>
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Mutual Funds</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Mutual funds are investment vehicles that pool money from multiple investors to buy a diversified portfolio of securities, such as stocks, bonds, and other assets. They are professionally managed, offering investors access to a range of investment opportunities that they might not be able to access on their own. Mutual funds provide a convenient and cost-effective way to invest in the financial markets, allowing investors to benefit from economies of scale and professional expertise. They offer investors diversification and risk reduction by spreading investments across multiple assets. Mutual funds are also highly liquid, meaning investors can buy or sell shares at any time at the current net asset value. However, mutual funds charge fees for their management and administration, which can reduce overall returns. Investors should carefully research and compare different mutual funds to find the best fit for their investment goals, risk tolerance, and financial situation. Mutual funds can be an excellent way to build long-term wealth and achieve financial goals, but it is essential to understand the risks and potential benefits before investing.</p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to mutual funds page</h2>
                        <button>Go</button>
                    </div>
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Bonds</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Bonds are debt securities that represent a loan given to an entity, such as a corporation, government, or municipality, in exchange for regular interest payments and the return of the principal at maturity. Bonds are a common form of fixed-income investment, offering investors a predictable stream of income and a lower risk than equities. Bond prices are affected by interest rates, credit ratings, and other factors, and can provide capital gains or losses depending on market conditions. Bonds can be issued with different maturities, ranging from short-term bonds, such as Treasury bills, to long-term bonds that can last several decades. They also come in different types, such as corporate bonds, municipal bonds, and government bonds, each with its own risk and reward profile. Bonds can provide diversification and stability to an investment portfolio, but investors should carefully consider the risks and potential rewards before investing. With the right knowledge and approach, bonds can be a valuable tool for building wealth and achieving financial goals.</p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to bonds page</h2>
                        <button>Go</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default TradingInstruments;
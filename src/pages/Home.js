import { Link } from 'react-router-dom'
import Section6 from "../components/layout/Section6";
import realbitcoinSack from '../img/realbitcoinsack.svg'
import bitcoinvaseoriginal from '../img/bitcoinvaseoriginal.svg'
import pig from '../img/pig.svg'
import bitMobmobileApp from '../img/bitMob mobileApp.png'
import demola from '../img/demola.jpg'
function HomePage() {
    return <div>
        <section class="section1 fixed-background-attachment">
            <div className='div'>
                <h1>
                    Buy, Save & Invest
                    <span class="whiteh1"> In Bitcoin Easily! </span>
                </h1>
                <p> Now you can automatically save in Bitcoin with as little as $1 today! </p>
                <Link name="" id="" class="btn btn-primary" to="/" role="button">
                    Get Started <svg width="15" height="18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" class="svg-inline--fa fa-angle-double-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                </Link>
                <span className='store'>
                <Link to="/">
                    <svg width="15" height="18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" class="svg-inline--fa fab fa-google-play fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>  Playstore
                </Link> 
                <Link to="/"> 
                <svg width="15" height="18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" class="svg-inline--fa fab fa-apple fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                Appstore
                </Link>
                </span>
            </div>
        </section>
        <section class="section2">
            <h1>
                What makes us <span> unique? </span>
            </h1>
            <div class="flexy">
                <div class="unique">
                    <img src={realbitcoinSack} alt="bitcoinInAsack" />
                    <h3>HODL While You Loan</h3>
                    <p>People all over the world are storing their
                        wealth in Bitcoin because its like gold but
                        digital and can be used for long term
                        portfolio diversification.
                    </p>
                </div>
                <div>
                    <img src={bitcoinvaseoriginal} alt="bitcoinInAvase" />
                    <h3>DCA Automatically Like A Pro</h3>
                    <p>With Bitcoin, you can guarantee your
                        privacy, transparency and a great level
                        of protection against fraud.It gives you
                        control over your money..
                    </p>
                </div>
                <div>
                    <img src={pig} alt="piggybank" />
                    <h3>Create A Savings Plan Easily</h3>
                    <p>Want to buy or send money
                        internationally? Or pay for items online?
                        Now you no longer have to worry
                        about unnecessary charges, or restrictions on
                        international payments
                    </p>
                </div>
            </div>
        </section>
        <section class="section3">
            <h1>
                How It Works.
            </h1>

            <p>
                Get started with bitnob in 3 simple steps
            </p>
            <div class="flexy2">
                <img src={bitMobmobileApp} alt="bitmob Phone" />
                <div>
                    <i class="fab fa-chevron-left" aria-hidden="true"></i>
                    <span>
                        <b>1.</b>
                        <h2>Sign Up On Bitnob</h2>
                        <p>Sign up on Bitnob for free on web,
                            iOS or android and follow our easy
                            process to set up your profile
                        </p>
                    </span>
                    <span>
                        <b>2.</b>
                        <h2>Choose A Convenient Savings Plan</h2>
                        <p>Want to save daily, weekly or monthly?
                            Set up periodic savings plans to match your goals.
                        </p>
                    </span>
                    <span>
                        <b>3.</b>
                        <h2>Start Buying, Saving and Earning with Bitnob</h2>
                        <p>Now you can focus on other things that matter
                            while your investment grows.
                        </p>
                    </span>
                    <i class="fab fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        </section>
        <section class="section4">
            <Link to="/">
                <h1><span>Convinced? </span> Get Started! </h1>
            </Link>
            <div class="flexy_">
                <img src={demola} alt="imag of myself" />
                <p>
                    “I used to feel too young to start
                    setting money aside, with Bitnob I
                    have realized it is never too early to
                    get started with your savings. Bitnob
                    is my coping mechanism to build up
                    for an independent life.“
                    <small>&#8211; Sikiru Ademola</small>
                </p>
            </div>
        </section>
        <section class="section5">
            <h1>What Bitnob Users <span> are saying </span></h1>
            <div class="flexy_3">
                <span id="edmond">
                    <p>“Bitnob_official is my first dance with crypto.
                        Not a full-blown tap dance yet... but more
                        like a waltz 😅. But it’s such an easy product
                        for us non-crypto intellectuals to use. I love
                        the simplicity of the product, but I love the
                        team behind it even more.”</p>
                    <strong>Edmond Oluto</strong>
                    <small>User</small>
                </span>
                <span id="gafar">
                    <p>Very good app and honestly, and their UX is
                        sleek. My weekly buys have been seamless,
                        the only time I had an issue the support
                        team had it sorted right away. Quickly
                        becoming my favorite Bitcoin app</p>
                    <strong>Gafa Home</strong>
                    <small>User</small>
                </span>
                <span id="jones">
                    <p>
                        Also, check out @Bitnob_official. It's a
                        seamless app that automates your BTC
                        purchase so you can buy weekly or monthly 👍</p>
                    <strong>Split Jones</strong>
                    <small>User</small>
                </span>
            </div>
        </section>
        <Section6 />
    </div>
}

export default HomePage;
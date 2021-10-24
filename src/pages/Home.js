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

<h1>
    Buy, Save & Invest
    <span class="whiteh1"> In Bitcoin Easily! </span>
</h1>
<p> Now you can automatically save in Bitcoin with as little as $1 today! </p>
<Link name="" id="" class="btn btn-primary" to="/" role="button">
    Get Started
    <i class="fas fa-angle-double-right"></i>
</Link>
<Link to="/"><i class="fab fa-google-play"></i> Playstore </Link>
<Link to="/"><i class="fab fa-apple"></i> Appstore</Link>
</section>
<section class="section2">
<h1>
    What makes us <span id="unique"> unique? </span>
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
import { Link } from 'react-router-dom'
import bitcoinbounce from '../../img/bitcoin bounce.svg'
import bitMobmobileApp from '../../img/bitMob mobileApp.png'
function Section6() {
    return  <section class="section6">
    <div class="flexy3">
    <img src={bitMobmobileApp} alt="mobile"/>
        <span>
        <img src={bitcoinbounce} alt="BitCoin"/>
            <h2>
                Save In Bitcoin Like A Pro!
            </h2>
            <p>Join Bitnob and start your Bitcoin Investment in minutes.</p>
            <Link name="" id="" class="btn btn-success" to='/' role="button">Get Started</Link>
        </span>
    </div>
</section>
}
export default Section6;
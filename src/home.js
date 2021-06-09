import React, { Component } from 'react'
import axios from 'axios'
import QRCode from "react-qr-code";
import Button from '@material-ui/core/Button';
import bitcoinLogo from "./bitcoinLogo.png"
import moneroLogo from "./monero.png"
import dogeLogo from "./Dogecoin_logo.png"

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            circulation: 100000000,
            price: 0,
            marketCap: 0,
            rank: 1,
            bitcoinInflation: 1,
            moneroInflation: 1
        }
    }

    async componentDidMount() {

        let result = await axios.get("https://api.coingecko.com/api/v3/coins/dogecoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")

        let data = result.data.market_data

        //bitcoin info
        let bitcoinResult = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
        let bitcoinBlockInfo = await axios.get("https://blockchain.info/q/bcperblock")

        let bitcoinLastReward = bitcoinBlockInfo.data
        bitcoinLastReward *= 52560
        bitcoinLastReward = bitcoinLastReward.toFixed(2)

        let bitcoinData = bitcoinResult.data.market_data

        let bitcoinInflation = bitcoinLastReward / bitcoinData.circulating_supply
        bitcoinInflation = 100 * bitcoinInflation

        //monero info
        let moneroResult = await axios.get("https://api.coingecko.com/api/v3/coins/monero?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
        let moneroBlockInfo = await axios.get("https://localmonero.co/blocks/api/get_stats")

        let moneroLastReward = moneroBlockInfo.data.last_reward
        moneroLastReward = moneroLastReward.toString()
        moneroLastReward = '0.' + moneroLastReward
        moneroLastReward = Number(moneroLastReward)
        moneroLastReward *= 262800
        moneroLastReward = moneroLastReward.toFixed(3)

        let moneroData = moneroResult.data.market_data

        let moneroInflation = moneroLastReward / moneroData.circulating_supply
        moneroInflation = 100 * moneroInflation

        this.setState({
            circulation: data.circulating_supply,
            price: data.current_price.usd,
            marketCap: data.market_cap.usd,
            rank: data.market_cap_rank,
            bitcoinInflation: bitcoinInflation,
            moneroInflation: moneroInflation
        })

    }

    render() {
        let inflation = this.state.circulation / 5000000000
        inflation = 100 / inflation

        return (
            <div align="center">
                <div>
                    <img src={dogeLogo} height="35%" width="35%" />
                </div>
                <div id="textInfo">
                    <h2>Price : ${this.state.price.toFixed(7)}</h2>
                    <h2>Inflation Rate: {inflation.toFixed(2)}%</h2>
                    <h2>
                        Market Cap: ${this.state.marketCap
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </h2>
                    <h2>market Cap Rank: {this.state.rank}</h2>
                    <br />
                    <div align="center">
                        <h2>Tips Appreciated :)</h2>
                        <QRCode value="DB56Yce35J6YS57A7gyN559N7V1NDptoJr" size="128" />
                        <br></br>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigator.clipboard.writeText('DB56Yce35J6YS57A7gyN559N7V1NDptoJr')}
                        >
                            Copy
                        </Button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3>Other Coins</h3>
                <div id="bitcoin">
                    <a href="https://veryscience.github.io/bitcoininflation/" >
                        <img src={bitcoinLogo} height="14%" width="14%" />
                        <br />
                        <p>Inflation: {this.state.bitcoinInflation.toFixed(2)}%</p>
                    </a>
                </div>
                <br />
                <div id="monero">
                    <a href="https://veryscience.github.io/moneroinflation/" >
                        <img src={moneroLogo} height="9%" width="9%" />
                        <br />
                        <p>Inflation: {this.state.moneroInflation.toFixed(2)}%</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home

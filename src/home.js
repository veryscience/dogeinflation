import React, { Component } from 'react'
import axios from 'axios'
import QRCode from "react-qr-code";
import Button from '@material-ui/core/Button';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            circulation: 100000000,
            price: 0,
            marketCap: 0,
            rank: 1
        }
    }

    async componentDidMount() {

        let result = await axios.get("https://api.coingecko.com/api/v3/coins/dogecoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")

        let data = result.data.market_data

        this.setState({
            circulation: data.circulating_supply,
            price: data.current_price.usd,
            marketCap: data.market_cap.usd,
            rank: data.market_cap_rank
        })

    }

    render() {
        let inflation = this.state.circulation / 5000000000
        inflation = 100 / inflation

        return (
            <div align="center">
                <div>
                    <img src="https://res.cloudinary.com/jerrick/image/upload/v1611916824/6013e617b25457001c7d6e2f.png" height="20%" width="20%" />
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
            </div>
        )
    }
}

export default Home

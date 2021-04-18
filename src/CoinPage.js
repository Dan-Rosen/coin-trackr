import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography, TextField, Container } from '@material-ui/core'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Coin from './Coin'
import useStyles from './CoinPageStyles'

function CoinPage() {
    const classes = useStyles()

    const [coinData, setCoinData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getCoinData()
    }, [])

    const getCoinData = async () => {
        const res = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        setCoinData(res.data)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coinData.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>
            <Grid container>
                <Grid
                    container
                    align='center'
                    spacing={2}
                    className={classes.PageHeader}
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' className={classes.Branding}>
                            <NightsStayIcon /> Coin Trackr
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='outlined-basic'
                            label='Coin Search'
                            variant='outlined'
                            fullWidth='true'
                            className={classes.Search}
                            name='search'
                            value={search}
                            onChange={handleSearch}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={5} direction='row'>
                    {filteredCoins.map((coin) => (
                        <Grid item xs={12} md={3}>
                            <Coin
                                key={coin.id}
                                name={coin.name}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketcap={coin.market_cap}
                                volume={coin.total_volume}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

export default CoinPage

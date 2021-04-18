import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    CardActions
} from '@material-ui/core'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import TrendingDownIcon from '@material-ui/icons/TrendingDown'
import useStyles from './CoinStyles'

function Coin(props) {
    const classes = useStyles()

    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={props.image} alt={props.name}></Avatar>}
                title={props.symbol.toUpperCase()}
                subheader={props.name}
            ></CardHeader>
            <CardContent>
                <Typography variant='subtitle1'>
                    <strong>Price:</strong> ${props.price.toLocaleString()}
                </Typography>
                <Typography variant='subtitle1'>
                    <strong>Market Cap:</strong> $
                    {props.marketcap.toLocaleString()}
                </Typography>
                <Typography variant='subtitle1'>
                    <strong>Volume:</strong> ${props.volume.toLocaleString()}
                </Typography>
            </CardContent>
            <CardActions className={classes.ChangeArea}>
                <Typography variant='h5'>
                    {props.priceChange.toFixed(2)}%
                </Typography>
                {props.priceChange < 0 ? (
                    <TrendingDownIcon
                        fontSize='large'
                        className={classes.Down}
                    />
                ) : (
                    <TrendingUpIcon fontSize='large' className={classes.Up} />
                )}
            </CardActions>
        </Card>
    )
}

export default Coin

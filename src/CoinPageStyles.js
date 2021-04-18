import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    PageHeader: {
        margin: theme.spacing(3)
    },
    Branding: {
        margin: theme.spacing(1),
        fontFamily: 'Zen Dots'
    },
    Search: {
        maxWidth: '300px'
    }
}))

export default useStyles

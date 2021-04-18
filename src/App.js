import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CoinPage from './CoinPage'

function App() {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: { main: '#009688' },
            secondary: { main: '#ffc400' }
        },

        typography: {
            fontFamily: ['Ubuntu Mono', 'sans-serif'].join(',')
        }
    })

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline />
            <CoinPage />
        </ThemeProvider>
    )
}

export default App

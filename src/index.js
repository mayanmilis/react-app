import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blueGrey, purple, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff"
        },
        background: {
            default: "#fafafa"
        },
        type: 'dark'
    },
    
})

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

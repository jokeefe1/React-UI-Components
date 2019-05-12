import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './GlobalStyles';
import CardPage from './pages/CardPage/CardPage';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyles />
                <CardPage />;
            </div>
        </ThemeProvider>
    );
};

export default App;

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import store from './store/index.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
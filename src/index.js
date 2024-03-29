import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*//Оборчаиваем App в еще одну оболочку*/}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
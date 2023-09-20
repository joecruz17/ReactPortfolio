import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import AppRouter from './router';
import './index.scss';
import { BrowserRouter } from "react-router-dom";



const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><BrowserRouter><AppRouter/></BrowserRouter></StrictMode>)
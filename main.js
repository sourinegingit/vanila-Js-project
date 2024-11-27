import './index.css'
import { App } from "./src/App";
import { router } from './src/routes/router';

const root = document.getElementById("app");
root.appendChild(App());
router.resolve();
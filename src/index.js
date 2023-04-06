import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();
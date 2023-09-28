import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//elastic ui css implemented from here 
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider} from '@elastic/eui';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EuiProvider >
      <App />
    </EuiProvider>
  </React.StrictMode>
);

reportWebVitals();

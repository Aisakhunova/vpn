import React from 'react'; // Импорт React
import { createRoot } from 'react-dom/client'; // Импорт ReactDOM
import './index.css'; // Подключение стилей
import './i18n'; // Инициализация i18next (должно быть перед App)
import App from './App'; // Импорт основного компонента

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

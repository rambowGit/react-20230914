import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/Theme';
import { MainPage } from './pages/Main/component';
import 'normalize.css';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>,
);

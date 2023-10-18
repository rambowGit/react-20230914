import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/Theme';
import { MainPage } from './pages/Main/component';
import { store } from './redux';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
}

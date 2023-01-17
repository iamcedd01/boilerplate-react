import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { PrimaryLayout } from 'components/layouts/body-layouts';
import { DefaultTheme } from 'config/theme';
import Dashboard from 'pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrimaryLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<>Loading...</>} />
    </ThemeProvider>
  );
};

export default App;

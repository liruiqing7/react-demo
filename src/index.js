import { Component } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.less';
import LayOut from './pages/layout';
import { Board } from './pages/board';
import { Article } from './pages/article';
import ListComponent from './pages/list';
import OrderPage from './pages/order';
import UserPage from './pages/user';

class App extends Component {
  render() {
    const router = createHashRouter([
      {
        path: '/',
        element: <LayOut />,
        children: [
          {
            path: 'board',
            element: <Board />
          },
          {
            path: 'article',
            element: <Article />
          }
        ]
      },
      {
        path: '/list',
        element: <ListComponent />
      },
      {
        path: '/order',
        element: <OrderPage />
      },
      {
        path: '/user',
        element: <UserPage />
      }
    ]);

    return (
      <div className="container">
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;

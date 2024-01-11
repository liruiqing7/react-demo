import { memo } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Layout, theme } from 'antd';

import Home from '../pages/home';
import { Board } from '../pages/board';
import { Article } from '../pages/article';
import UserPage from '../pages/user';
import ListPage from '../pages/list';

import ComponentMenuList from './componentMenuList';

const { Header, Content, Sider } = Layout;

export default memo(() => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
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
      element: <ListPage />
    },
    {
      path: '/user',
      element: <UserPage />
    }
  ]);

  return (
    <Layout>
      <Header className="flex items-center">
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider
          style={{
            background: colorBgContainer
          }}
        >
          <ComponentMenuList />
        </Sider>
        <Layout className="px-24 pb-24">
          <Content
            className="px-24 py-24 min-h-280"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <RouterProvider router={router} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});

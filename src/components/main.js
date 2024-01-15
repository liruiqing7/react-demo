import { memo, useEffect } from 'react';
import { RouterProvider, createHashRouter, Navigate } from 'react-router-dom';
import { Layout, theme } from 'antd';
import ComponentMenuList from './componentMenuList';

import Home from '../pages/home';
import RepairWorkOrder from '../pages/workOrder/repairWorkOrder';
import SporadicRepairOrder from '../pages/workOrder/sporadicRepairOrder';
import { getData } from '../api/public';

const { Header, Content, Sider } = Layout;

export default memo(() => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getData();
    if (res) {
      console.log(res);
    }
  };

  const router = createHashRouter([
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/workOrder/repairWorkOrder',
      element: <RepairWorkOrder />
    },
    {
      path: '/workOrder/sporadicRepairOrder',
      element: <SporadicRepairOrder />
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

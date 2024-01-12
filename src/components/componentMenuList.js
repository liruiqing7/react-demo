import { memo, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { nonEmptyArray } from '../helpers/util';
import { getRouterMenuData } from '../api/public';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
];

export default memo(() => {
  const [menuList, setMenuList] = useState([]);

  // 获取菜单路由数据
  const fetchRouterMenuData = async () => {
    const res = await getRouterMenuData();
    if (res && nonEmptyArray(res.body)) {
      setMenuList(res.body);
    }
  };

  useEffect(() => {
    fetchRouterMenuData();
  }, []);

  console.log(menuList, 'menuList');

  return (
    <div>
      <Menu defaultOpenKeys={['sub1']} selectedKeys={['1']} mode="inline" items={items} />
    </div>
  );
});

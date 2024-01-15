import { memo, useEffect, useState } from 'react';
import { Menu } from 'antd';

import { nonEmptyArray } from '../helpers/util';
import { getRouterMenuData } from '../api/public';

function getItem(key, label, children, uri, type, icon) {
  return {
    key,
    icon,
    children,
    label,
    type,
    uri
  };
}

export default memo(() => {
  const [menuData, setMenuData] = useState([]);
  const [currentSelectMenuItem, setCurrentSelectMenuItem] = useState([]);
  // const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);

  useEffect(() => {
    fetchRouterMenuData();
  }, []);

  // 获取菜单路由数据
  const fetchRouterMenuData = async () => {
    const res = await getRouterMenuData();
    if (res && nonEmptyArray(res.body)) {
      const originMenu = res.body;
      const newMenu = [];

      setCurrentSelectMenuItem(originMenu[0].sub_list[0].uri);
      // setDefaultOpenKeys(originMenu[0].code);

      // 构建路由树
      originMenu.map(({ name, code, sub_list }) => {
        const key = code;
        const child = [];

        if (nonEmptyArray(sub_list)) {
          sub_list.map(({ name, code, uri }) => {
            return child.push(getItem(uri, name, '', uri, code, ''));
          });
        }

        return newMenu.push(getItem(key, name, child, '', code, ''));
      });

      setMenuData(newMenu);
    }
  };

  const handleClickMenuItem = (e) => {
    setCurrentSelectMenuItem(e.key);
    window.location.href = '/#' + e.key;
  };
  // console.log(currentSelectMenuItem, 'currentSelectMenuItem');
  // console.log(defaultOpenKeys, 'currentSelectMenuItem');
  // console.log(menuData, 'menuData');
  return (
    <div className="menuContainer">
      <Menu
        defaultOpenKeys={['101']}
        selectedKeys={[currentSelectMenuItem]}
        mode="inline"
        onClick={(e) => handleClickMenuItem(e)}
        items={menuData}
      />
    </div>
  );
});

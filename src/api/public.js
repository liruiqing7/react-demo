import API from './index';
import { API_PUBLIC_GATEWAY, ORG_TREE } from './endpoints';

// 获取系统菜单路由信息
const getRouterMenuData = async () => {
  const formData = new FormData();

  formData.append('service', 'rosefinch.web.menu.info');
  formData.append('tag', '/mgr/app/maintain/');

  return API.post(API_PUBLIC_GATEWAY, formData);
};

// 获取系统组织列表
const getData = async () => {
  const params = {
    service: ORG_TREE
  };
  return API.get(API_PUBLIC_GATEWAY, { params });
};

export { getRouterMenuData, getData };

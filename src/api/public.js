import API from 'api/index';

// 获取系统菜单路由信息
const getRouterMenuData = async () => {
  const formData = new FormData();

  formData.append('service', 'rosefinch.web.menu.info');
  formData.append('tag', '/mgr/app/maintain/');

  return API.post('/mgr/api/gateway', formData);
};

export { getRouterMenuData };

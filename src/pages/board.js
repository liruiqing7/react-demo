import { Button, message } from 'antd';

export const Board = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleMessage = () => {
    messageApi.info('hello, Ant Design!');
  };

  return (
    <div className="content">
      {contextHolder}
      <Button onClick={handleMessage}>执行</Button>
      <div className="text-3xl font-bold underline">this is board</div>
    </div>
  );
};

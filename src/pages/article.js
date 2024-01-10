import { DatePicker, Button, message } from 'antd';

export const Article = () => {
  const [, contextHolder] = message.useMessage();

  return (
    <div>
      {contextHolder}
      <DatePicker />
      <Button type="primary">执行</Button>
      <div className="mt-23 w-244 text-24 pb-20 ">this is article</div>
    </div>
  );
};

import { memo, useState, useEffect } from 'react';

export default memo(() => {
  const [name, setName] = useState('liruiqing');

  useEffect(() => {
    setTimeout(() => {
      setName('---');
    }, 3000);
  }, [name]);

  const handleChangeName = () => {
    setName('wangjiao');
  };

  return <div onClick={handleChangeName}>{name}</div>;
});

import { memo } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import './main.css';

const UserPage = memo(() => {
  return (
    <div className="w-120">
      <Link to="/list">1211</Link>
      UserPage11
    </div>
  );
});

export default UserPage;

import { NavLink } from 'react-router-dom';

import {
  adminLinks,
  userLinks,
  labCommittee,
} from '../utils/links';

// store
import useStore from '../state/store';

const AdminDashboard = () => {
  // store data
  const user = useStore((state) => state.user);

  return (
    <div className='nav__links'>
      {/* lab committee links */}
      {user.role === 'Customer' && <h1>Customer</h1>}

      {/* admin links */}
      {user.role === 'Admin' &&
        adminLinks.map(({ id, path, text, icon }) => (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav__link active' : 'nav__link'
            }
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        ))}

      {/* links for lab attendant */}
      {user.role === 'Lab Attendant' &&
        userLinks.map(({ id, path, text, icon }) => (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav__link active' : 'nav__link'
            }
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        ))}
    </div>
  );
};

export default AdminDashboard;

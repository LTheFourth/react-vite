import style from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';

export default function SidebarComponent() {
  const links: { name: string; path: string }[] = [
    { name: 'Movies', path: 'home' },
    { name: 'Creation', path: 'create' },
  ];

  return (
    <div className={style.sidebarContainer}>
      <div className={`${style.sidebarHeader} flex alg-cen`}>
        <div className={style.logo}>
          <h1 className='no-select'>NRT</h1>
        </div>
        <h2>Not Rotten Tomato</h2>
      </div>

      <div className={style.navLinks}>
        {links.map((link, index) => {
          return (
            <NavLink
              key={index}
              className={({isActive}) =>
                isActive
                  ? `${style.isActiveLink} ${style.linkItem}`
                  : style.linkItem
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

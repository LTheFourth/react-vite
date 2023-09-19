import style from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@shared/components/Sidebar';

export default function LayoutComponent() {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.content}>
          {/* <div className={style.header}>Header</div> */}
          <div className={style.body}>
            <Outlet />
          </div>
        </div>
      </div>
      {/* <div className={style.footer}>Footer</div> */}
    </div>
  );
}

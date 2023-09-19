import style from './sidebar.module.scss'

export default function SidebarComponent() {
  return (
    <div className={style.logo}>
      <h1 className='no-select'>Not Rotten Tomato</h1>
    </div>
  );
}

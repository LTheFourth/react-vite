import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal-content'>{children}</div>
    </>,
    document.getElementById('portal')!
  );
}

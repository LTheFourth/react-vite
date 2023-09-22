import useDetailPageLogic from './detail.logic';
import './detail.component.scss';
import { useNavigate } from 'react-router-dom';

export default function DetailPageComponent({
  isDetail = false,
}: {
  isDetail?: boolean;
}) {
  const logic = useDetailPageLogic(isDetail);
  const navigate = useNavigate();


  return (
    <div className='detail-page flex' key={logic.state.formValueKey}>
      <div className='form'>
        <div className='form-control'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            value={logic.prop.form.get('name')?.value}
            onChange={() => {}}
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Thumbnail</label>
          <input
            type='text'
            value={logic.prop.form.get('thumbnail')?.value}
            onChange={() => {}}
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Director</label>
          <input
            type='text'
            value={logic.prop.form.get('director')?.value}
            onChange={() => {}}
          />
        </div>

        <div className='action flex'>
          <button className='btn'>Save</button>
          <button className='btn' onClick={() => {
            navigate('/home')
          }}>Back To Movies</button>
        </div>
      </div>
    </div>
  );
}

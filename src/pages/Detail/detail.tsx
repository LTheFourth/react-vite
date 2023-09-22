import useDetailPageLogic from './detail.logic';

export default function DetailPageComponent() {
  const logic = useDetailPageLogic();

  return (
    <div className='detail-page' key={logic.state.formValueKey}>
      <div className='form'>
        <div className='form-control'>
          <input type="text" value={logic.prop.form.get('name')?.value} onChange={() => {}} />
        </div>
        <div className='form-control'>
          <input type="text" value={logic.prop.form.get('thumbnail')?.value} onChange={() => {}} />
        </div>
        <div className='form-control'>
          <input type="text" value={logic.prop.form.get('director')?.value} onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}

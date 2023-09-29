import useDetailPageLogic from './detail.logic';
import './detail.component.scss';

export default function DetailPageComponent({
  isDetail = false,
}: {
  isDetail?: boolean;
}) {
  const logic = useDetailPageLogic(isDetail);
  return (
    <div className='detail-page flex'>
      <div className='form'>
        <div className='form-control'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            value={logic.form['name'].value}
            onChange={(event) => {
              logic.form['name'].setValue(event.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Thumbnail</label>
          <input
            type='text'
            value={logic.form['thumbnail'].value}
            onChange={(event) => {
              logic.form['thumbnail'].setValue(event.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Director</label>
          <input
            type='text'
            value={logic.form['director'].value}
            onChange={(event) => {
              logic.form['director'].setValue(event.target.value);
            }}
          />
        </div>

        <div className='action flex'>
          <button className='btn' onClick={logic.saveMovie}>
            Save
          </button>
          {isDetail ? (
            <button className='btn' onClick={() => {
              logic.deleteMovie()
            }}>
              Delete
            </button>
          ) : null}
          <button
            className='btn'
            onClick={() => {
              logic.navigate('/home');
            }}
          >
            Back To Movies
          </button>
        </div>
      </div>
    </div>
  );
}

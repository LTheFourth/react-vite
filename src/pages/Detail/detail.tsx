import './detail.component.scss';
import useDetailPageLogic from './detail.logic';
import { FormInput } from 'src/shared/components/FormControlInput';

export default function DetailPageComponent({
  isDetail = false,
}: {
  isDetail?: boolean;
}) {
  const logic = useDetailPageLogic(isDetail);

  return (
    <div className='detail-page flex'>
      <div className='form'>
        <FormInput
          label='Name'
          displayError={logic.submitted}
          control={logic.form.control('name')}
        />
        <FormInput
          label='Thumbnail'
          displayError={logic.submitted}
          control={logic.form.control('thumbnail')}
        />
        <FormInput
          label='Director'
          displayError={logic.submitted}
          control={logic.form.control('director')}
        />
        <div className='action flex'>
          <button className='btn' onClick={logic.saveMovie}>
            Save
          </button>
          {isDetail ? (
            <button className='btn' onClick={logic.deleteMovie}>
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

import { useNavigate } from 'react-router-dom';
import './home.component.scss';
import useHomePageLogic from './home.logic';

function HomePageComponent() {
  const logic = useHomePageLogic();
  const navigate = useNavigate();

  return (
    <>
      <div className='home-page'>
        <div className="action">
          <button className='btn my-1' onClick={() => {
            navigate('/create')
          }}>New Movie</button>
        </div>

        <div className='cards flex'>
          {logic.state.movies.map((movie, index) => (
            <div
              className='movie-card clickable flex flex-col alg-cen'
              onClick={() => {
                navigate(`/detail/${movie.id}`);
              }}
              key={index}
            >
              <div className='thumbnail'>
                <img src={movie.thumbnail} alt='' />
              </div>
              <div className='information'>
                <h1 className='title'>{movie.name}</h1>
                <div className='information-row'>{movie.director}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePageComponent;

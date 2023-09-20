import './home.component.scss';
import useHomePageLogic from './home.logic'

function HomePageComponent() {
  const logic = useHomePageLogic();

  return (
    <div className='home-page'>
      <div className='cards flex'>
        {logic.state.movies.map((movie, index) => (
          <div
            className='movie-card clickable flex flex-col alg-cen'
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
  );
}

export default HomePageComponent;

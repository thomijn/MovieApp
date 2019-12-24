import React from 'react'
import CanvasContainer from "./components/models/CanvasContainer"
import MovieDetailContainer from './components/MovieDetail/MovieDetailContainer'
import Title from './components/Title/Title';

const App = () => {
  return (
    <div className="App">
      <MovieDetailContainer />
      <Title />
      <CanvasContainer />
    </div >
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<Home movies={movies} />} path='/' />

          <Route element={<Trailer />} path='/Trailer/:ytTrailerId' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

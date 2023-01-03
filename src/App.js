import Hero from './pages/app/hero/Hero';
import Nav from './components/nav/Nav';
import Courses from './pages/app/courses/Courses';
import Details from './pages/app/details/Details';
import Learn from './pages/app/learn/Learn';
import Page404 from './pages/misc/Page404/Page404';
import Chapter from './pages/app/chapter/Chapter';
import SignIn from './pages/auth/signin/SignIn';

import { Routes, Route } from 'react-router-dom';
// yarn add react-router-dom
// npm i react-router-dom
import './App.css';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />

        <Route path='/courses'>
          <Route index element={<Courses />} />
          <Route path=':courseID' element={<Details />} />
        </Route>

        <Route path='learn/:courseID' element={<Learn />}>
          <Route path='chapter' element={<Chapter />} />
        </Route>

        <Route path='*' element={<Page404 />} />

        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

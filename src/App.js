import Hero from './pages/app/hero/Hero';
import Nav from './components/nav/Nav';
import Courses from './pages/app/courses/Courses';
import Details from './pages/app/details/Details';
import Learn from './pages/app/learn/Learn';
import Page404 from './pages/misc/Page404/Page404';
import Chapter from './pages/app/chapter/Chapter';
import SignIn from './pages/auth/signin/SignIn';
import ProtectedRoute from './components/protected/ProtectedRoute';

import { Routes, Route, Outlet } from 'react-router-dom';
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
          <Route
            index
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path=':courseID'
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path='learn/:courseID'
          element={
            <ProtectedRoute>
              <Learn />
            </ProtectedRoute>
          }
        >
          <Route path='chapter' element={<Chapter />} />
        </Route>

        <Route path='*' element={<Page404 />} />

        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

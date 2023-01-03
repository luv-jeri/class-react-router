import React, { useEffect } from 'react';
import style from './Courses.module.css';
import Card from '../../../components/card';
import coursesData from '../../../data/courses.json';
import useAuth from '../../../context/AuthContext';
import {  Navigate } from 'react-router-dom';
function Courses() {
 
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/signin' />;
  }

  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
        <h4>Choose you katana ⚔️</h4>
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Card
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                img={course.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;

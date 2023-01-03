import React from 'react';
import style from './Details.module.css';
import { useParams, Link } from 'react-router-dom';
import courseData from '../../../data/courses.json';

function Details() {
  const { courseID } = useParams();

  const course = courseData.find((course) => course.id === courseID);

  return (
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            <img src={course.img} alt='icons' />
          </div>
        </div>
        <div className={style.card_content}>
          <h1 className={style.card_title}>{course.title}</h1>
          <p className={style.card_description}>{course.description}</p>
        </div>
      </div>
      <Link to={`/learn/${courseID}`}>
        <button className={style.button}>Start Learning</button>
      </Link>
    </div>
  );
}

export default Details;

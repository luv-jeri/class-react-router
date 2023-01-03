import React from 'react';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

function Card({ title, img, id }) {
  const navigate = useNavigate();
  return (
    <div
      className={style.card_container}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        navigate(`/courses/${id}`);
      }}
    >
      <div className={style.card_image}>
        <div className={style.image_container}>
          <img src={img} alt='icons' />
        </div>
      </div>
      <div className={style.card_content}>
        <h1 className={style.card_title}>{title}</h1>
      </div>
    </div>
  );
}

export default Card;

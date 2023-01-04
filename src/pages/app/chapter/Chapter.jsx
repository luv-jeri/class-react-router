import React from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';

function Chapter() {
  const { state } = useLocation();

  const course = useOutletContext();

  const chapter = course.chapters.find((el) => {
    return String(el.chapter) === String(state);
  });

  return (
    <div>
      <h1>Chapter</h1>
      <hr />
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <p>{chapter.details}</p>
    </div>
  );
}

export default Chapter;

import React, { useEffect, useState, useCallback } from 'react';
import './Homeworkes.css';
import { homeworkes } from '../../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import Block from '../../../../images/Block.svg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLanguageLesson,
  getCurrentLesson,
} from '../../../../store/slices/CurrentLessons/CurrentLessonsApi';
import { closeLockIconHomeWork, openLockIconHomeWork } from '../../../../iconFolder/icon';
import {
  getAllData,
  getIsCurrentLessonNuber,
} from '../../../../store/slices/CurrentLessons/CurrentLessonsSlice';

function Homeworkes({ lessons, changeHomework }) {
  const { t, i18n } = useTranslation();
  const dataJan = useSelector(getAllData);
  const dispatch = useDispatch();

  const changeCurrentLesson = useCallback((lesson) => {
    if (lesson.number <= dataJan.current_lesson_number) {
      dispatch(getCurrentLesson({ lengId: dataJan.course_language_id, lessonId: lesson.id }));
      changeHomework(lesson);
    }
  }, [dispatch, dataJan.course_language_id, dataJan.current_lesson_number, changeHomework]);

  const scrollToUp = () => {
    window.scrollTo(0, 0);
  };


  const handleLessonClick = useCallback((lesson) => {
    changeCurrentLesson(lesson);
    scrollToUp();
  }, [changeCurrentLesson, scrollToUp]);

  console.log("dataJan",dataJan);
  return (
    <>
      {lessons?.map((el, index) => (
        <div
          className="homeworkes_linne_div"
          key={index}
          onClick={() => handleLessonClick(el)}>
          <p
            className={
              el.number <= dataJan.current_lessson_number ||
              el.number <= dataJan.current_lesson_number
                ? 'homeworkes_text'
                : 'homeworkes_text_dark'
            }>
            {/* {el.number <= fullData.current_lesson_number ? "open" : "close"} */}
            {console.log(el.number, dataJan.current_lesson_number, 55555555)}
            {t('homework_linne.1')} {el.number}: {el.title}
          </p>
          <p className="homeworkes_duration">
            {el.duration} {t('homework_linne.2')}
          </p>
          {/* {el.number <= dataJan.current_lesson_number ? <span>{openLockIconHomeWork}</span> : <span>{closeLockIconHomeWork}</span>} */}
        </div>
        // <div className="allLIne" key={index}>
        //   <div className="lineLeft">
        //     <span className="lineLeftText">{el.id} {el.name} <span className="addition">{el.addition}</span></span>
        //   </div>
        //   <div className="lineRight">
        //     <span className="lineRightTime">{el.time}</span>
        //     <img src={Block} alt="Block" className="blockImg"/>
        //   </div>
        // </div>
      ))}
    </>
  );
}

export default React.memo(Homeworkes, (prev, next)=> JSON.stringify(prev) === JSON.stringify(next));

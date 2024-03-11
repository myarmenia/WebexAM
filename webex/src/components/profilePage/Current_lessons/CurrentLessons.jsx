import React, { useEffect, useMemo, useState } from 'react';
import './CurrentLessons.css';
import kodVideo from '../../../videos/kodVideo.mp4';
import { allVideoLessons } from '../../Helper/ProfileSidebarHelp/ProfileSidebarHelp';
import vector222 from '../../../images/Vector222.svg';
import vector222Down from '../../../images/Vector222Down.svg';
import Line from '../../../images/Line.svg';
import Button from '../../Button/Button';
import Homeworkes from './Homeworkes/Homeworkes';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLanguageLesson,
  getCurrentLesson,
} from '../../../store/slices/CurrentLessons/CurrentLessonsApi';
import {
  getAllCourses,
  getAllData,
  getIsCurrentLessonReq,
  getLoading,
  setIsCurrentLessonReq,
} from '../../../store/slices/CurrentLessons/CurrentLessonsSlice';
import { useLoaderData } from 'react-router-dom';
import VideoPlayer from 'react-video-js-player';
import Plyr from 'plyr-react';
import { useTranslation } from 'react-i18next'
import Spinner from '../../../images/Spinner.svg'
// import 'plyr-react/dist/plyr.css';

function CurrentLessons() {
  const { t, i18n } = useTranslation()
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [selectedHomeworkDescription, setSelectedHomeworkDescription] = useState('');
  const allCourses = useSelector(getAllCourses);
  const [allCoursesState, setallCoursesState] = useState(allCourses);
  const allData = useSelector(getAllData);
  // const {all_courses} = useSelector(getAllData);
  const loading = useSelector(getLoading);
  const [description, setDescription] = useState('');
  const isCurrentLessonReq = useSelector(getIsCurrentLessonReq);
  console.log('isCurrentLessonReq', isCurrentLessonReq);
  const dispatch = useDispatch();
  console.log(allData, "666666666666666");
  useEffect(() => {
    // if (isCurrentLessonReq) {
      dispatch(getCurrentLesson({lengId: '0', lessonId: '0'}));
    // }
  }, [dispatch]);

  const changeHomework = (homework) => {
    setSelectedHomework(homework);
    setSelectedHomeworkDescription(homework?.description || '');
  };
  
  console.log(selectedHomework,'ffffff');

  
  const [open, setOpen] = useState(null)
  useEffect(() => {
    let des = '';
    if (allData?.current_lesson?.description) {
      des = allData?.current_lesson?.description;
    } else if (allData?.lessons?.length > 0) {
      des = allData?.lessons[0].description;
    }
    setDescription(des);
    setOpen({
      numDas: allData.current_lessson_number,
      lengId: allData.course_language_id

    })
  }, [allData]);
  // console.log('allData', allData);
  // console.log(typeof allData.lessons, 996966);
  // let hhh = allData?.lessons[0]?.description
  // console.log("hhh",hhh);
  console.log('allCourses', allCourses);
  // console.log("all_courses",all_courses);

  const videoSource = useMemo(() => {
    return selectedHomework?.video || allData?.current_lesson?.video || allData?.lessons?.length && allData?.lessons[0]?.video;
  }, [selectedHomework, allData]);

  const lessons = useSelector(getAllData)?.lessons || [];
  const fullData = useSelector(getAllData);
  
  const memoizedLessons = useMemo(() => lessons, [lessons]);
  const memoizedFullData = useMemo(() => fullData, [fullData]);
  
  
  return (
    <>
      {loading ? (
        <div className="message-modal"><span className="loader"></span></div>
      ) : (
        (console.log('allData', allData),
        (
          <div className="allSide">
            <div className="leftSide">
              <p className="Introduction">{allData?.course_language_name}</p>
              <p>{allData?.current_lesson?.number || allData?.lessons[0].number}. {allData?.current_lesson?.title || allData?.lessons[0].title}</p>
              <div className="leftSideTop">
                {/* <p className="title_name">HTML/HTML 5</p> */}
                {/* <video width="100%" height="auto" controls>
             <source src={kodVideo} type="video/mp4" />
           </video> */}
                {/* <VideoPlayer
             src={kodVideo}
             width="100%" 
           /> */}
                {/* <ReactPlayer
             // url="https://www.youtube.com/watch?v=your-video-id"
             url={kodVideo}
             // src={kodVideo}
             controls={true}
             width="100%"
             height="100%"
           /> */}
                <Plyr
                  source={{
                    type: 'video',
                    sources: [
                      {
                        src: videoSource,
                        type: 'video/mp4',
                      },
                    ],
                  }}
                  options={{
                    controls: [
                      'play-large',
                      'play',
                      'progress',
                      'current-time',
                      'mute',
                      'volume',
                      'settings',
                      'fullscreen',
                    ],
                    speed: {
                      selected: 1, // Default playback speed (1x)
                      options: [0.5, 1, 1.5, 2], // Speed options: 0.5x, 1x, 1.5x, 2x
                    },
                    captions: { active: true, update: true, language: 'auto', update: true },
                  }}
                />
                <div className="description">
                  <p className="description_title">{t('description')}</p>
                  <p className="description_text">
                  {selectedHomeworkDescription || allData?.current_lesson?.description || allData?.lessons[0]?.description}

                    {/* {allData?.current_lesson?.description ? allData?.current_lesson?.description :
                     allData.lessons.length === 0 ? "5555" : allData?.lessons[0].description} */}
                    <span className="description_more">
                      {allData?.current_lesson?.description?.length > 30
                        ? '․․․more'
                        : allData?.lessons[0]?.description?.length > 30
                        ? '․․․more'
                        : '...'}
                    </span>
                  </p>
                </div>
                {/* <div className="homework_line">
             <p className="homework_line_p">Կատարել տնային առաջադրանքները</p>
             <span>
               <img src={Line} alt="Line" />
             </span>
             <Button index="5" />
           </div> */}
                <div className="homework_linne">
                  <p className="homework_title">{t('homework_linne.0')}</p>
                  {allData?.current_lesson?.tasks
                    ? allData?.current_lesson?.tasks.map((el, index) => (
                        <div className="homework_linne_div" key={index} onClick={() => changeHomework(el)}>
                          <p className="homework_text">
                          {t('homework_linneHom.1')} {index+1}: {el?.description}
                          </p>
                          <p>{el.duration} {t('homework_linne.2')}</p>
                        </div>
                      ))
                    : allData.lessons[0]?.tasks.map((el, index) => (
                        <div className="homework_linne_div" key={index}>
                          <p className="homework_text">
                          {t('homework_linneHom.1')} {index+1}: {el?.description}
                          </p>
                          <p>{el.duration} {t('homework_linne.2')}</p>
                        </div>
                      ))}
                </div>
                <div className="homework_side">
                  <p className="HomeworkList">{t('cordial')}</p>
                  <Homeworkes lessons={memoizedLessons} changeHomework={changeHomework} />
                </div>
              </div>
              {/* <div style={{ width: '58vw' }}>
           <p className="HomeworkList">Տնային աշխատանքների ցանկ</p>
           <Homeworkes lessons={allData?.lessons}/>
         </div> */}
            </div>
            <div className="rightSide">
              {/* <div style={{ width: '18vw' }}> */}
              <p className="titleAllVideo">{t('all_video_lessons')}</p>
              <div className="allvideoLessons_div">
                {(allCourses || allCoursesState).map((el, index) => (
                  <div
                    key={index}
                    className="allvideoLessons"
                    onClick={() => dispatch(getCurrentLanguageLesson(el.id))}>
                    {allData?.course_language_id === el.id ? (
                      <img
                        src={vector222Down}
                        alt="vector222Down"
                        className={
                          allData?.course_language_id === el.id
                            ? 'vector222Down vector222Down-Active'
                            : 'vector222Down'
                        }
                      />
                    ) : (
                      <img src={vector222} alt="vector222" className="vector222" />
                    )}
                    <span
                      className={
                        allData?.course_language_id === el.id
                          ? 'nameAllVideo nameAllVideo-Active'
                          : 'nameAllVideo'
                      }>
                      {el.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default React.memo(CurrentLessons, (prev, next)=> JSON.stringify(prev) === JSON.stringify(next));

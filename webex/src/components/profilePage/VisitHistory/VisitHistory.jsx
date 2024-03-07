import React, { useEffect, useState } from 'react';
import './VisitHistory.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitHistory } from '../../../store/slices/VisitHistory/VisitHistoryApi';
import {
  getAllVisitDate,
  getLoadingVisitHistory,
} from '../../../store/slices/VisitHistory/VisitHistorySlice';
import RightArrow from '../../../images/RightArrow.png'
import { setIsCurrentLessonReq } from '../../../store/slices/CurrentLessons/CurrentLessonsSlice';
import { getCurrentLanguageLesson } from '../../../store/slices/CurrentLessons/CurrentLessonsApi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function VisitHistory() {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AllVisitDate = useSelector(getAllVisitDate);
  const loading = useSelector(getLoadingVisitHistory);
  const lang = localStorage.getItem('lang');
  const goToLessonPage = (id) => {
    dispatch(setIsCurrentLessonReq(false))
    dispatch(getCurrentLanguageLesson(id));
    navigate(`/${lang}/profilePage/currentLessons`);
  };


  const [hoveredRows, setHoveredRows] = useState(new Set());

  useEffect(() => {
    dispatch(getVisitHistory());
  }, []);
  const tableData = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
    { id: 4, name: 'Item 4', description: 'Description 4' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredRows((prevHoveredRows) => new Set([...prevHoveredRows, index]));
  };

  const handleMouseLeave = (index) => {
    setHoveredRows((prevHoveredRows) => {
      const newHoveredRows = new Set(prevHoveredRows);
      newHoveredRows.delete(index);
      return newHoveredRows;
    });
  };
  console.log('AllVisitDate', AllVisitDate);

  return (
    <>
      {loading ? (
        <div>loadingg</div>
      ) : (
        <div
          style={{
            backgroundColor: '#F4F7F9',
            width: '100%',
            height: '100vh',
            padding: '2%',
            boxSizing: 'border-box',
          }}>
          <p className="payment-title">{t('visitHistory.0')}</p>
          <div className="allPayment">
            <table className="tableStyle">
              <thead className="thead">
                <tr>
                  <th>{t('visitHistory.1')}</th>
                  <th>{t('visitHistory.2')}</th>
                  <th>{t('visitHistory.3')}</th>
                  <th>{t('visitHistory.4')}</th>
                  <th>{t('visitHistory.5')}</th>
                </tr>
              </thead>
              <tbody>
                {AllVisitDate.map((item, index) => (
                  <tr
                    key={item.id}
                    className="trStyle"
                    style={{ backgroundColor: hoveredRows.has(index) ? '#E1CFFF' : '#FFFFFF' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <td>{index+1}</td>
                    <td className="lessons_namee">{item.name}</td>
                    <td>{item.total_lessons}</td>
                    <td>{item.current_lesson_number}</td>
                    <td><img src={RightArrow} alt="RightArrow" className="RightArrow" onClick={()=>goToLessonPage(item.id)}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default VisitHistory;

import React, { useState, useEffect } from 'react';
import { FaCalendarDay, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import './emploiDuTemps.scss'

const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

const MiniCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    renderCalendar();
  }, [currentMonth, currentYear]);

  const renderCalendar = () => {
    const date = new Date(currentYear, currentMonth, 1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    let calendarDays = [];

    // Previous month days
    for (let x = firstDay.getDay(); x > 0; x--) {
      calendarDays.push(
        <div key={`prev-${prevLastDayDate - x + 1}`} className="day prev" style={{textAlign:'center', fontSize:10, flexDirection:'column', height:80}}>
          {prevLastDayDate - x + 1}
        </div>
      );
    }

   // Current month days
    for (let i = 1; i <= lastDayDate; i++) {
        const isToday =
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();
    
        const customDate1 = new Date(2024, 5, 7);
        const customD1 =
        i === customDate1.getDate() &&
        customDate1.getMonth() === currentMonth &&
        customDate1.getFullYear() === currentYear;
    
        const customDate2 = new Date(2024, 5, 10);
        const customD2 =
        i === customDate2.getDate() &&
        customDate2.getMonth() === currentMonth &&
        customDate2.getFullYear() === currentYear;
    
        const customDate3 = new Date(2024, 5, 15);
        const customD3 =
        i === customDate3.getDate() &&
        customDate3.getMonth() === currentMonth &&
        customDate3.getFullYear() === currentYear;
    
        const customDate4 = new Date(2024, 5, 20);
        const customD4 =
        i === customDate4.getDate() &&
        customDate4.getMonth() === currentMonth &&
        customDate4.getFullYear() === currentYear;
    
        const customDate5 = new Date(2024, 5, 25);
        const customD5 =
        i === customDate5.getDate() &&
        customDate5.getMonth() === currentMonth &&
        customDate5.getFullYear() === currentYear;
    
        calendarDays.push(
        <div
            key={`current-${i}`}
            className={`day ${isToday ? 'today' : ''}`}
            style={{ textAlign: 'center', fontSize: 10, flexDirection: 'column', height: 80 }}
        >
            <div style={{ color: isToday ? 'white' : '#7777f6' }}>{i}</div>
            {/* condition pour la date */}
            {/* <div style={{ color: isToday ? 'white' : '#7777f6' }}>10h00-12h20</div> */}
            <div
                style={{
                    color:
                    customD1 ? '#7777f6' :
                    customD2 ? '#7777f6' :
                    customD3 ? '#7777f6' :
                    customD4 ? '#7777f6' :
                    customD5 ? '#7777f6' :
                    'rgba(0, 0, 0, 0.7)',
                    fontWeight: 'bolder',
                    fontSize: '11.5px'
                }}
            >
                {customD1 ? '10h00-12h20' :
                customD2 ? '10h00-12h20' :
                customD3 ? '10h00-12h20' :
                customD4 ? '10h00-12h20' :
                customD5 ? '10h00-12h20' :
                'aucun'}
            </div>
            <br />
            <div
                style={{
                    color:
                    customD1 ? 'rgba(0, 0, 0, 0.7)' :
                    customD2 ? 'rgba(0, 0, 0, 0.7)' :
                    customD3 ? 'rgba(0, 0, 0, 0.7)' :
                    customD4 ? 'rgba(0, 0, 0, 0.7)' :
                    customD5 ? 'rgba(0, 0, 0, 0.7)' :
                    'rgba(0, 0, 0, 0.0)',
                    fontWeight: 'bolder',
                    fontSize: '11.5px'
                }}
            >
                {customD1 ? 'Anglais' :
                customD2 ? 'Français' :
                customD3 ? 'Mathématiques' :
                customD4 ? 'Philosophie' :
                customD5 ? 'Histoire' :
                ''}
            </div>
        </div>
        );
    }

    // Next month days
    for (let j = 1; j <= nextDays; j++) {
      calendarDays.push(
        <div key={`next-${j}`} className="day next" style={{textAlign:'center', fontSize:10, flexDirection:'column', height:80}}>
          {j}
        </div>
      );
    }

    return calendarDays;
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleToday = () => {
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  const hideTodayBtn = () => {
    return (
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    );
  };

  return (
    <div className='emploiDuTemps'>
        <div className="container">
        <div className="calendar">
            <div className="header">
            <div className="month">
                {months[currentMonth]} {currentYear}
            </div>
            <div className="btns">
                <div className={`btn today-btn ${hideTodayBtn() ? 'hide' : ''}`} onClick={handleToday}>
                <FaCalendarDay />
                </div>
                <div className="btn prev-btn" onClick={handlePrevMonth}>
                <FaChevronLeft />
                </div>
                <div className="btn next-btn" onClick={handleNextMonth}>
                <FaChevronRight />
                </div>
            </div>
            </div>
            <div className="weekdays">
            {days.map((day, index) => (
                <div key={index} className="day" style={{color:"white",fontWeight:'bolder'}}>
                    {day}
                </div>
            ))}
            </div>
            <div className="days">{renderCalendar()}</div>
        </div>
        </div>
    </div>
  );
};

export default MiniCalendar;
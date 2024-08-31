// Format YYYY-MM-DD
import React, { useState, useEffect } from "react";
import {
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import "./emploiDuTemps.scss";
import Cookies from "js-cookie";

const months = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const MiniCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [programme, setProgramme] = useState([]);
  const [customDate, setCustomDate] = useState([]);

  const fecthProgramme = async () => {
    const programmeReponse = await fetch(
      `http://192.168.118.18:3032/programme/programme/${Cookies.get("idClasse")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const programmeData = await programmeReponse.json();
    setProgramme(programmeData);
  };

  useEffect(() => {
    fecthProgramme();
  }, []);

  useEffect(() => {
    renderCalendar();
    console.log(programme);
  }, [currentMonth, currentYear, programme]);

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
        <div
          key={`prev-${prevLastDayDate - x + 1}`}
          className="day prev"
          style={{
            textAlign: "center",
            fontSize: 10,
            flexDirection: "column",
            height: 80,
          }}
        >
          {prevLastDayDate - x + 1}
        </div>
      );
    }

    //parceque le code ajoute un jour sur la date de depart
    function retirerUnjour(date) {
      const nouvelleDate = new Date(date);
      nouvelleDate.setDate(nouvelleDate.getDate() - 1);
      return nouvelleDate.toISOString().slice(0, 10); // Format YYYY-MM-DD
    }

    // recuperation des dates
    const additionalDates = [];
    programme.map((programme) => {
      const dateModifiee = retirerUnjour(programme.date);
      additionalDates.push(dateModifiee);
    });

    // recupation des matires par date
    const matieresParDate = {};
    programme.forEach((programme) => {
      const dateModifiee = retirerUnjour(programme.date);
      matieresParDate[dateModifiee] = programme.matiere;
    });

    // recuperation des heures
    const heureParDate = {};
    programme.forEach((programme) => {
      const dateModifiee = retirerUnjour(programme.date);
      heureParDate[dateModifiee] = programme.heure;
    });

    // Boucle pour chaque jour du mois en cours
    for (let i = 1; i <= lastDayDate; i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const isToday =
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();

      // Vérifie si la date actuelle est dans additionalDates
      const isAdditionalDate = additionalDates.includes(
        currentDate.toISOString().split("T")[0]
      );

      // Récupère la matière associée à la date courante
      const matiere =
        matieresParDate[currentDate.toISOString().split("T")[0]] || "";

      // Récupère la matière associée à la date courante
      const heure = heureParDate[currentDate.toISOString().split("T")[0]] || "";

      calendarDays.push(
        <div
          key={`current-${i}`}
          className={`day ${isToday ? "today" : ""}`}
          style={{
            textAlign: "center",
            fontSize: 10,
            flexDirection: "column",
            height: 80,
          }}
        >
          <div style={{ color: isToday ? "white" : "#7777f6" }}>{i}</div>
          {/* Condition pour le contenu du jour */}
          <div
            style={{
              color: isAdditionalDate ? "#6ec0d4" : "rgba(0, 0, 0, 0.7)",
              fontWeight: "bolder",
              fontSize: "11.5px",
              fontStyle: "italic",
            }}
          >
            {isAdditionalDate ? heure : "aucun"}
          </div>
          <br />
          <div
            style={{
              color: isAdditionalDate
                ? "rgba(0, 0, 0, 0.7)"
                : "rgba(0, 0, 0, 0.0)",
              fontWeight: "bolder",
              fontSize: "11.5px",
              fontStyle: "italic",
            }}
          >
            {isAdditionalDate ? matiere : ""}
          </div>
        </div>
      );
    }

    // Next month days
    for (let j = 1; j <= nextDays; j++) {
      calendarDays.push(
        <div
          key={`next-${j}`}
          className="day next"
          style={{
            textAlign: "center",
            fontSize: 10,
            flexDirection: "column",
            height: 80,
          }}
        >
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
    <div className="emploiDuTemps">
      <div className="container">
        <div className="calendar">
          <div className="header">
            <div className="month">
              {months[currentMonth]} {currentYear}
            </div>
            <div className="btns">
              <div
                className={`btn today-btn ${hideTodayBtn() ? "hide" : ""}`}
                onClick={handleToday}
              >
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
              <div
                key={index}
                className="day"
                style={{ color: "white", fontWeight: "bolder" }}
              >
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

import React, { useState } from "react";
import { AiOutlineUp } from "react-icons/ai"; 
import { FaAngleUp } from "react-icons/fa";
import "./CourseProgram.css";

const CourseProgram = () => {
  const mainDropdownData = [
      {
      title: "Февраль",
      content: "Details for main dropdown 1",
      image: "https://via.placeholder.com/300",
      subDropdowns: [
        {
          name:"ДРУЙ Александр Евгеньевич",
          subHeading: "Введение в молекулярную онкологию",
          details: "к.м.н., врач клинической лабораторной диагностики, заведующий лабораторией молекулярной онкологии, национальный медицинский исследовательский центр детской гематологии, онкологии и иммунологии имени Дмитрия Рогачева, Москва, Российская Федерация",
          date: "04.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_081e86a01b2f4700a6555555d179bfc9~mv2.jpg",
        },
        {
          name:"ДРУЙ Александр Евгеньевич",
          subHeading: "Молекулярно-диагностические маркеры в онкологии",
          details: "к.м.н., врач клинической лабораторной диагностики, заведующий лабораторией молекулярной онкологии, национальный медицинский исследовательский центр детской гематологии, онкологии и иммунологии имени Дмитрия Рогачева, Москва,Российская Федерация",
          date: "11.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_081e86a01b2f4700a6555555d179bfc9~mv2.jpg",
        },
        {
          name:"ВАЛЬКОВ Михаил Юрьевич,",
          subHeading: "Скрининг и ранняя диагностика онкологических заболеваний",
          details: "д.м.н., профессор, врач онколог, радиотерапевт, радиолог, заведующий, кафедра лучевой диагностики, лучевой терапии и онкологии, Северный государственный медицинский университет, Архангельск, Российская Федерация",
          date: "27.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_67e63f5548c84cd4b6ad8eebcd4d4314~mv2.jpeg",
        }
      ],
    },
 {                                                                                                                                                          
        title: "Март",
        content: "Details for main dropdown 1",
        image: "https://via.placeholder.com/300",
        subDropdowns: [
         {
          name:"НОВИКОВ Сергей Николаевич",
          subHeading: "Основы лучевой терапии онкологических заболеваний",
          details: "Д.м.н., профессор, онколог, радиотерапевт, заведующий, отделение радиотерапии; заведующий научным отделением–ведущий научный сотрудник, Национальный медицинский исследовательский центр онкологии им. Н. Н. Петрова, Санкт-Петербург, Российская Федерация",  
          date: "08.03.2025",
          image: "https://static.wixstatic.com/media/992e52_30bf5ba06f664d6592d9757e16c38c5d~mv2.png",
	 },
         {
          name:"КРИШНАМУРТИ Арвинд,",
          subHeading: "Клиническая оценка онкологического пациента",
          details: "Профессор, врач-хирург, онколог, заведующий, отделение хирургической онкологии, Онкологический институт Адьяра, Ченнаи, Тамил Наду, Индия",
          date: "15.03.2025",
          image: "https://static.wixstatic.com/media/df6cc5_3c628cc4c1024204abd8b6ea9a471934~mv2.jpg",
        },
        {
          name:"ГИМРАНОВ Альберт Минусагитович,",
          subHeading: "Принципы и методы диагностики и лечения онкологических пациентов на примере рака молочной железы",
          details: "Врач-хирург, онколог, заведующий, онкологическое отделение №4 (отделение маммологии и пластической хирургии), Республиканский клинический онкологический диспансер, Казань, Российская Федерация",
          date: "30.03.2025",
          image: "https://static.wixstatic.com/media/992e52_d136d05b5d47424e91efb4165e123eb1~mv2.jpg",
         }
        ],
      },
      {
        title: "Апрель",
        content: "Details for main dropdown 1",
        image: "https://via.placeholder.com/300",
        subDropdowns: [
         {
          name:"РАНГАРАДЖАН Венкатеш,",
          subHeading: "Ядерно-медицинские методы диагностики и лечения",
          details: "Профессор, заведующий, отделение ядерной медицины и молекулярной визуализации, Мемориальная больница им. Таты, Мумбаи, Махараштра, Индия",
          date: "05.04.2025",
          image: "https://static.wixstatic.com/media/df6cc5_a2aba71835a742dca61d7a9dae8bf238~mv2.png",
         },
         {
          name:"ГУПТА Рича,",
          subHeading: "Роль цитологической и гистологической диагностики как основа онкопатологии",
          details: "Профессор, врач-патолог, отделение патологии, Университетский колледж медицинских наук и больница им. Гуру Тег Бахадур, Дели, Индия",
          date: "12.04.2025",
          image: "https://static.wixstatic.com/media/e6f22e_46fbbee456f3407e93e33304188639fc~mv2.jpg",
         },
         {
          name:"ГУПТА Рича,",
          subHeading: "Дополнительные методы уточняющей диагностики в онкопатологии",
          details: "Профессор, врач-патолог, отделение патологии, Университетский колледж медицинских наук и больница им. Гуру Тег Бахадур, Дели, Индия",
          date: "19.04.2025",
          image: "https://static.wixstatic.com/media/e6f22e_46fbbee456f3407e93e33304188639fc~mv2.jpg"
         },
         {
          name:"НЕСТЕРОВА Альфия Ирековна,",
          subHeading: "Поддерживающая терапия в онкологии",
          details: "К.м.н., руководитель, отдел трансляционной онкологии ителемедицинских технологий, Республиканский онкологическийклинический диспансер им. Профессора М. З. Сигала,Казань, Российская Федерация",
          date: "23.04.2025",
          image: "https://static.wixstatic.com/media/df6cc5_d22d72c3575748369b9fb7b7290dfb67~mv2.avif"
         },
         {
          name:"",
          subHeading: "ИТОГОВОЕ ТЕСТИРОВАНИЕ",
          details: "Проверьте свои знания с помощью итогового тестирования Прекурса. Также напоминаем, что успешное прохождение теста является условием для конкурсного участия в Базовых медицинских курсах (июль–август 2025 г.) Итоговое тестирование будет доступно с 29 апреля 2025 г. (вторник).",
          date: "29.04.2025-29.05.2025",
          image: "https://static.wixstatic.com/media/df6cc5_d1a1f3cc169440178204944eada2fa0a~mv2.jpg",
         }
        ],
      },
      {
        title: "Май",
        content: "Details for main dropdown 1",
        image: "https://via.placeholder.com/300",
        subDropdowns: [
         {
          name:"ГУЗЬ Александр Олегович,",
          subHeading: "Онкологическая помощь в РФ. Маршрутизация онкологических пациентов",
          details: "Врач-хирург, онколог, заместитель главного врача по медицинской части, Челябинский областной клинический центр онклогии и ядерной медицины, Челябинск, Российская Федерация",
          date: "", 
          image: "https://static.wixstatic.com/media/df6cc5_d6b122f2bd844d4495faf5a602795215~mv2.jpg",
         },
          {                                                                                                                                                            name:"ТИМАШКОВ Иван Александрович,",
          subHeading: "Лучевая диагностика в онкологии",
          details: "Рентгенолог, главный лучевой диагност, Медицинский центр «СМ-Клиника», Москва, Российская Федерация",
          date: "",
          image: "https://static.wixstatic.com/media/df6cc5_a3280132f4ad41139c450be6035e57ce~mv2.jpg",
         }
        ],
      },
    // Add more main dropdowns as needed
  ];

  // State to manage open main dropdowns and sub-dropdowns
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [openSubDropdowns, setOpenSubDropdowns] = useState([]);

  // Toggle function for main dropdowns
  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
};

  // Toggle function for sub-dropdowns
  const toggleSubDropdown = (index) => {
    setOpenSubDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
<section className="course-program" id="program">
  <h2 className="course-heading">ПРОГРАММА ПРЕКУРСА</h2>

  <div className="course-sub-header-content">
    <div className="course-conunter">
      <h1>12</h1>
      <h4>ВЕБИНАРОВ</h4>
    </div>
    <div className="course-conunter">
      <h1>10</h1>
      <h4>ЭКСПЕРТОВ</h4>
    </div>
    <div className="course-conunter">
      <h1>3</h1>
      <h4>МЕСЯЦА</h4>
    </div>
  </div>

  <div className="box-container">
    {mainDropdownData.map((dropdownItem, idx) => (
      <div className="div-box" key={idx}>
        {/* Main Dropdown Header */}
        <div className="div-header" onClick={() => toggleDropdown(idx)}>
          <div className="left-side">
            <h3>{dropdownItem.title}</h3>
          </div>
          <div className="right-side">
            <FaAngleUp
              className={`arrow-icon ${
                openDropdowns.includes(idx) ? "rotate" : ""
              }`}
            />
          </div>
        </div>

        {/* Main Dropdown Content */}
        {openDropdowns.includes(idx) && (
          <div className="dropdown-content">
            {dropdownItem.subDropdowns.length > 0 ? (
              dropdownItem.subDropdowns.map((subItem, subIdx) => (
                <div
                  className="sub-dropdown"
                  key={subIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubDropdown(subIdx);
                  }}
                >
                  <div className="sub-header">
                    <div className="sub-left">
                      <h4>{subItem.subHeading}</h4>
                    </div>
                    <div className="sub-right">
                      <p>{subItem.date}</p>
                      <FaAngleUp
                        className={`arrow-icon ${
                          openSubDropdowns.includes(subIdx) ? "rotate" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Sub-Dropdown Content */}
                  {openSubDropdowns.includes(subIdx) && (
                    <div className="sub-dropdown-content">
                      <div className="sub-content">
                        <div className="sub-content-left">
                          <img
                            src={subItem.image}
                            alt={subItem.subHeading}
                          />
                        </div>
                        <div className="sub-content-right">
                          <h1>{subItem.name}</h1>
                          <p>{subItem.details}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-content-message">
                Будет объявлено позже
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
</section>
  );
};

export default CourseProgram;

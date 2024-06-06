import React, { useState } from "react";
// import './App.css'; // Подключите ваш CSS файл

function RoadmapWeb() {
  const [roadmapContent, setRoadmapContent] = useState([
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ]);
  const [isClicked, setIsClicked] = useState(false);

  const arrClass = [
    "first_block_anim",
    "second_block_anim",
    "third_block_anim",
    "fourth_block_anim",
    "fifth_block_anim"
  ];

  function swapNext() {
    setIsClicked(true); // Устанавливаем isClicked в true при клике на кнопку

    // Обновляем состояние roadmapContent
    setRoadmapContent((prevContent) => {
      const newContent = prevContent.slice(1).concat(prevContent[0]);
      return newContent;
    });

    // Сбрасываем isClicked после окончания анимации
    setTimeout(() => setIsClicked(false), 2000); // Указываем время анимации в миллисекундах
  }

  return (
    <div className="roadmapWeb">
      <button onClick={swapNext}>
        NEXT
      </button>
      {roadmapContent.map((el, index) => (
        <div
          key={index}
          id={el}
          className={isClicked ? arrClass[index] : ""}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default RoadmapWeb;

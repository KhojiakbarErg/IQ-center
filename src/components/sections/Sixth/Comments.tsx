import React, { useState, useEffect } from "react";
import { ThemeComments } from "./Comments.style";
import { CommentCard } from "../../UI/CommentCard/CommentCard";

export const Comments = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const comments = [
    {
      commentator: "Commentator.png",
      name: "Хожиакбар",
      comment:
        "Сергей Дмитриевич, я поступил в 12 ВУЗов, а в некоторые на бюджет. Хочу выразить вам огромную благодарность за ваш труд, за знания которые вы мне дали, за ваш подход и мотивацию.",
    },
    {
      commentator: "Commentator2.jpg",
      name: "Баха",
      comment:
        "Здраствуйте благодаря вам поступил в Avity, British managment, Webster, MDIST, Akfa и TMCI.",
    },
    {
      commentator: "Commentator3.jpg",
      name: "Руслан",
      comment:
        "Здравствуйте Сергей Дмитриевич, это ваш ученик Руслан, я поступил в инха наконец то ! Спасибо большое вам за этот год!!!",
    },
    {
      commentator: "Commentator4.jpg",
      name: "Амир",
      comment:
        "Сергей Дмитриевич, я поступил в Экономический университет. Хочу поблагодарить вас за все ваши уроки, и знания которые вы нам давали. Спасибо вам большое!!!",
    },
  ];

  const handleNextComment = () => {
    setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePreviousComment = () => {
    setCurrentCommentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  return (
    <ThemeComments id="comments">
      <h1>Отзывы</h1>
      <div className="container">
        <CommentCard
          commentator={comments[currentCommentIndex].commentator}
          name={comments[currentCommentIndex].name}
          comment={comments[currentCommentIndex].comment}
        />
        <div id="commswap">
          <button id="previouscomm" onClick={handlePreviousComment}>
            ❮Back
          </button>
          <button id="nextcomm" onClick={handleNextComment}>
            Next❯
          </button>
        </div>
      </div>
    </ThemeComments>
  );
};

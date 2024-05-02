import React, { useRef, useState } from "react";
import { ThemeComments } from "./Comments.style";
import { CommentCard } from "../../UI/CommentCard/CommentCard";

interface Comment {
  commentator: string;
  name: string;
  comment: string;
}

export const Comments: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const comments: Comment[] = [
    {
      commentator: "Commentator.png",
      name: "Хожиакбар",
      comment:
        "Сергей Дмитриевич, я поступил в 12 ВУЗов, а в некоторые на бюджет...",
    },
    {
      commentator: "Commentator2.jpg",
      name: "Баха",
      comment:
        "Здраствуйте благодаря вам поступил в Avity, British management, Webster, MDIST, Akfa и TMCI.",
    },
    {
      commentator: "Commentator3.jpg",
      name: "Руслан",
      comment:
        "Здравствуйте Сергей Дмитриевич, это ваш ученик Руслан, я поступил в инха наконец то! " +
        "Спасибо большое вам за этот год!!!",
    },
    {
      commentator: "Commentator4.jpg",
      name: "Амир",
      comment:
        "Сергей Дмитриевич, я поступил в Экономический университет. Хочу поблагодарить вас за все ваши уроки, и знания которые вы нам давали. " +
        "Спасибо вам большое!!!",
    },
  ];

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % comments.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleBackClick = () => {
    const newIndex = (currentIndex - 1 + comments.length) % comments.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    const node = containerRef.current;
    if (node && node.children[index]) {
      const targetElement = node.children[index] as HTMLElement;
      targetElement.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <ThemeComments id="comments">
      <h1>Отзывы</h1>
      <div ref={containerRef} className="container">
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            commentator={comment.commentator}
            name={comment.name}
            comment={comment.comment}
          />
        ))}
      </div>
      <div id="commswap">
        <button id="previouscomm" onClick={handleBackClick}>
          ❮ Back
        </button>
        <button id="nextcomm" onClick={handleNextClick}>
          Next ❯
        </button>
      </div>
    </ThemeComments>
  );
};

export default Comments;

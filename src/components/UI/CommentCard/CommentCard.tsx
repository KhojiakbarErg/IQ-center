import React from "react";
import { ThemeCommentCard } from "./CommentCard.style";

interface CommentCardProps {
  commentator: string;
  name: string;
  comment: string;
}

export const CommentCard = ({
  commentator,
  name,
  comment,
}: CommentCardProps) => {
  return (
    <ThemeCommentCard>
      <div className="containerimg">
        <img src={commentator} alt="" id="FirstImgComm" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
    </ThemeCommentCard>
  );
};

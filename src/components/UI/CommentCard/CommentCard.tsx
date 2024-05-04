import React from "react";
import { ThemeCommentCard } from "./CommentCard.style";

interface CommentCardProps {
  commentator: string;
  name: string;
  comment: string;
  className?: string;
}

export const CommentCard = ({
  commentator,
  name,
  comment,
  className,
}: CommentCardProps) => {
  return (
    <ThemeCommentCard>
      <div className="containerimg">
        <img src={commentator} alt="" id="FirstImgComm" className={className} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
    </ThemeCommentCard>
  );
};

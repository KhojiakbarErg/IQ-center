import React from "react";
import { ThemeTeacherCard } from "./TeacherCard.style";

interface TeachercardProps {
  teacher: string;
  name: string;
  subject: string;
  inf: string;
  bold?: string;
}

export const TeacherCard = ({
  teacher,
  name,
  subject,
  inf,
  bold,
}: TeachercardProps) => {
  return (
    <ThemeTeacherCard>
      <div id="border"></div>
      <div id="teacherinfbox">
        <img src={teacher} id="Teacher" alt="" />
        <img src="TeacherPlace.svg" alt="" id="TeacherPlace" />
        <h3>{name}</h3>
        <p className="subject">{subject}</p>
        <p className="informationteach">
          <b>{bold}</b>
          {inf}
        </p>
      </div>
    </ThemeTeacherCard>
  );
};

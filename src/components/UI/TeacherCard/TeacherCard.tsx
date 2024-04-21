import React from "react";
import { ThemeBoxTeachers, ThemeTeacherCard } from "./TeacherCard.style";

interface TeachercardProps {
  teacher: string;
  name: string;
  subject: string;
  inf: string;
}

export const TeacherCard = ({
  teacher,
  name,
  subject,
  inf,
}: TeachercardProps) => {
  return (
    <ThemeBoxTeachers>
      <img src="border.png" id="border"></img>
      <ThemeTeacherCard>
        <img src={teacher} id="Teacher" alt="" />
        <img src="TeacherPlace.png" alt="" id="TeacherPlace" />
        <h3>{name}</h3>
        <p className="subject">{subject}</p>
        <p className="informationteach">{inf}</p>
      </ThemeTeacherCard>
    </ThemeBoxTeachers>
  );
};

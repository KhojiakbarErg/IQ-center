import React from "react";
import { ThemeOurTeacher } from "./OurTeachers.style";
import { TeacherCard } from "../../UI/TeacherCard/TeacherCard";

export const OurTeachers = () => {
  return (
    <ThemeOurTeacher>
      <div>
        <h1>Наши учителя</h1>
        <div>
          <TeacherCard
            teacher=""
            name="Сергей"
            subject="Математика"
            inf="10+ лет опыта. 100% постумаемости. Несколько высших образований. И просто качок."
          />
        </div>
      </div>
    </ThemeOurTeacher>
  );
};

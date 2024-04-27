import React from "react";
import { ThemeOurTeacher } from "./OurTeachers.style";
import { TeacherCard } from "../../UI/TeacherCard/TeacherCard";

export const OurTeachers = () => {
  return (
    <ThemeOurTeacher id="ourteachers">
      <div>
        <h1>Наши учителя</h1>
        <div id="scrollplace">
          <TeacherCard
            teacher=""
            name="Сергей"
            subject="Математика"
            inf="    100% постумаемости. Несколько высших образований."
            bold="10+ лет опыта. "
          />
          <TeacherCard
            teacher=""
            name="Улугбек"
            subject="Математика"
            inf="  подготовленых студентов. Перспективный учитель. 100% постумаемости."
            bold="200"
          />
          <TeacherCard
            teacher=""
            name="Бахриддин"
            subject="Английский"
            inf=" Продуктивный метод обучения.  Настоящий полиглот(знание 5 языков)"
            bold="IELTS 8,5."
          />
        </div>
      </div>
      <img src="Gradient5.png" alt="" id="Gradient5" />
    </ThemeOurTeacher>
  );
};

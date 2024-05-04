//@ts-ignore

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeComments } from "./Comments.style";
import { CommentCard } from "../../UI/CommentCard/CommentCard";

export const SimpleSlider = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          paddingLeft: "0",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          paddingRight: "0",
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: true,
    centerMode: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    speed: 550,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <ThemeComments id="comments">
      <h1>Отзывы</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <CommentCard
            commentator="Commentator.png"
            name="Хожиакбар"
            comment="Сергей Дмитриевич, я поступил в 12 ВУЗов, а в некоторые на бюджет. 
                Хочу выразить вам огромную благодарность за ваш труд, за знания 
                которые вы мне дали, за ваш подход и мотивацию."
          />

          <CommentCard
            commentator="Commentator2.jpg"
            name="Баха"
            comment="Здраствуйте благодаря вам поступил в Avity, British managment, Webster, MDIST, Akfa и TMCI."
          />

          <CommentCard
            commentator="Commentator3.jpg"
            name="Руслан"
            comment="Здравствуйте Сергей Дмитриевич, это ваш ученик Руслан, я поступил в инха наконец то !
          Спасибо большое вам за этот год!!!"
          />

          <CommentCard
            commentator="Commentator4.jpg"
            name="Амир"
            comment="Сергей Дмитриевич, я поступил в Экономический университет . Хочу поблагодарить вас за все ваши уроки, и знания которые вы нам давали.
          Спасибо вам большое!!!"
          />
        </Slider>
      </div>
    </ThemeComments>
  );
};

export default SimpleSlider;

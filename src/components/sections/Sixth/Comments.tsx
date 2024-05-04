import React from "react";
import { ThemeComments } from "./Comments.style";
import { CommentCard } from "../../UI/CommentCard/CommentCard";

export const Comments = () => {
  return (
    <ThemeComments id="comments">
      <h1>Отзывы</h1>

      <div className="container">
        <input checked type="radio" name="respond" id="desktop" />
        <article id="slider">
          <input checked type="radio" name="slider" id="switch1" />
          <input type="radio" name="slider" id="switch2" />
          <input type="radio" name="slider" id="switch3" />
          <input type="radio" name="slider" id="switch4" />
          <div id="slides">
            <div id="overflow">
              <div className="image">
                <article>
                  <CommentCard
                    commentator="Commentator.png"
                    name="Хожиакбар"
                    comment="Сергей Дмитриевич, я поступил в 12 ВУЗов, а в некоторые на бюджет. 
                Хочу выразить вам огромную благодарность за ваш труд, за знания 
                которые вы мне дали, за ваш подход и мотивацию."
                  />
                </article>
                <article>
                  <CommentCard
                    commentator="Commentator2.jpg"
                    name="Баха"
                    comment="Здраствуйте благодаря вам поступил в Avity, British managment, Webster, MDIST, Akfa и TMCI."
                  />
                </article>
                <article>
                  <CommentCard
                    commentator="Commentator3.jpg"
                    name="Руслан"
                    comment="Здравствуйте Сергей Дмитриевич, это ваш ученик Руслан, я поступил в инха наконец то !
          Спасибо большое вам за этот год!!!"
                  />
                </article>
                <article>
                  <CommentCard
                    commentator="Commentator4.jpg"
                    name="Амир"
                    comment="Сергей Дмитриевич, я поступил в Экономический университет . Хочу поблагодарить вас за все ваши уроки, и знания которые вы нам давали.
          Спасибо вам большое!!!"
                  />
                </article>
              </div>
            </div>
          </div>
          <div id="controls">
            <label htmlFor="switch1"></label>
            <label htmlFor="switch2"></label>
            <label htmlFor="switch3"></label>
            <label htmlFor="switch4"></label>
          </div>
          <div id="active">
            <label htmlFor="switch1"></label>
            <label htmlFor="switch2"></label>
            <label htmlFor="switch3"></label>
            <label htmlFor="switch4"></label>
          </div>
        </article>
      </div>
    </ThemeComments>
  );
};

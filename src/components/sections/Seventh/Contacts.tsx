import { ThemeLocation } from "./Contacts.style";

export const Location = () => {
  return (
    <ThemeLocation id="contacts">
      <h1>
        Свяжитесь с <b> нами</b>
      </h1>
      <div className="mainlocation">
        <div className="inf">
          <div className="extrainf">
            <h5 id="number">Номер Телефона:</h5>
            <a href="tel:+998785550587">+998 (78) 555-05-87</a>
          </div>
          <div className="extrainf">
            <h5 id="location">Адрес: </h5>
            <p>Улица Афросиаб, 8А</p>
          </div>
          <div className="extrainf">
            <h5 id="place">Ориентир: </h5>
            <p>Dmaar Plaza Бизнес-центр, -1 этаж</p>
          </div>

          <div id="socialmedias">
            <a
              href="https://www.instagram.com/iqcenter.uz?igsh=dWR3ejgzeGlsaXRq"
              target="_blank"
            >
              <img src="Insta.svg" alt="insta" />
            </a>
            <a href="https://t.me/IQ_CenterBot " target="_blank">
              <img src="Telega.svg" alt="telega" />
            </a>
          </div>
        </div>
        <div id="mapmain">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3624260070139!2d69.27177499999999!3d41.2990796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad3d3ade79%3A0xf71ffbe980720fd3!2sIQ%20Center!5e0!3m2!1sru!2s!4v1717863152405!5m2!1sru!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="map"
            title="map"
          />
        </div>
      </div>
    </ThemeLocation>
  );
};

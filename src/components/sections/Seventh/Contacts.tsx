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
            <a href="tel:+998908052935">+998 (90) 805-29-35</a>
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
            <a href="https://www.instagram.com/iqcenter.uz?igsh=dWR3ejgzeGlsaXRq">
              <img src="Insta.png" alt="" />
            </a>
            <a href="https://t.me/iqcenter_uz">
              <img src="Telega.png" alt="" />
            </a>
          </div>
        </div>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5495.09161401229!2d69.26709453458406!3d41.29868299477258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdc89f27f6b%3A0x49989a739be2f0e5!2sDmaar%20plaza!5e0!3m2!1sru!2s!4v1713811723490!5m2!1sru!2s"
            width="660"
            height="470"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="map"
            title="map"
          ></iframe>
        </div>
      </div>
    </ThemeLocation>
  );
};

import '../assets/scss/_contact.scss'
export default function Contact() {
  return (
    <section id="contact">
      <div className="contact container">
        <div className="wrapper">
          <h1>CONTACT US</h1>
        </div>
        <h2>We are Open</h2>
        <hr />
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/door-opened.png" />{" "}
            </div>
            <div className="contact-info">
              <h3>Opening Hours</h3>
              <p>
                ❖ Tuesday to Saturday ..... 9:00 - 14:00
                <br /> <br /> ❖　Orders must be placed 2 days before for greater
                security, processing and availability.
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/delivery-tracking--v1.png" />{" "}
            </div>
            <div className="contact-info">
              <h3>Home Delivery Service</h3>
              <p>
                ❖ All the city of Stockholm (redacted) and Malmo (redacted)
                with additional cost.
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/pickup-point.png" />{" "}
            </div>
            <div className="contact-info">
              <h3>Pick-up Order</h3>
              <p>
                ❖ Via la Costa Avenue. Blue Port gated neighborhood. <br />{" "}
                <br />❖ We will send you the GPS Location via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

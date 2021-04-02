import '../assets/scss/_about.scss'
export default function About() {
return (
  <div className="about container">
    <div className="wrapper">
      <h1>ABOUT US</h1>
    </div>
    <h2>Our Promises</h2>
    <hr />
    <p>
      At Munamii Cakery, each cake, each box of cupcakes that we make has a very
      special value for us. We not only want to bring a dessert to your table
      but rather a unique experience for you, which will become an unforgettable
      memory. We have been in the pastry market for more than 8 years and now we
      offer you a new way to shop through our website. Let's cake your day!
    </p>
    <hr />
    <div className="about-grid">
      <div className="col-left">
        <div className="about-img">
          <img
            src={require(`../assets/images/about/staff.jpg`).default}
            alt="Logo"
          />
        </div>
      </div>
      <div className="col-right">
        <h2>Meet Emma</h2>
        <h1>Munamii Creator</h1>
        <p>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          ut blanditiis quasi possimus vel distinctio cum quibusdam itaque
          perferendis doloremque ipsa maxime aperiam, totam ullam amet optio id!
          Asperiores, nihil?""
        </p>
      </div>
    </div>
  </div>
);
}

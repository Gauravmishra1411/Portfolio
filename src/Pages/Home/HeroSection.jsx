export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gaurav</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a result-oriented and self-motivated MCA student looking <br />{" "}
            for a challenging career where I can implement my coding knowledge
          </p>
        </div>
        <button className="btn btn-primary">
          <a
          target="_blank"
          href="https://drive.google.com/file/d/11vnasWeQsX4LXVhLMz4YV9UigehZOcgp/view?usp=drive_link"
          >
            Resume
          </a>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}

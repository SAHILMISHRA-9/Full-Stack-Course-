import "./globals.css"
export default function Page() {
  return (
    <main>
      <section className="hero" >
        <div className="content">
          <p>YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</p>
          <h1>Discover whats possible with 3D printing</h1>
          <p>Join our community of creators and explore a vast library of user-submitted models</p>
          <div>
            <button className="button">BROWSE MODELS</button>
          </div>
        </div>
        <div>
          <img className="home-img" src="/hero-image.png"/>
        </div>
      </section>
    </main>
  );
}

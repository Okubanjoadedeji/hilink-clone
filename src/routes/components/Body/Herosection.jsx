


function Herosection() {
  return (
    <section className="herosection">
      <div className="hero-map"></div>

      <div className="hero-cont">
        <img alt="Login" loading="lazy" width="50" height="50" src="/camp.svg" />
        
        <h1>Putuk Truno Camp Area</h1>
        
        <p>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        
        <div className="rating">
          <div className="rating-star">
            <img alt="star" loading="lazy" width="24" height="24" src="/star.svg"/>
            <img alt="star" loading="lazy" width="24" height="24" src="/star.svg"/>
            <img alt="star" loading="lazy" width="24" height="24" src="/star.svg"/>
            <img alt="star" loading="lazy" width="24" height="24" src="/star.svg"/>
            <img alt="star" loading="lazy" width="24" height="24" src="/star.svg"/>
          </div>
          <p>198K <span>Excellent Reviews</span></p>
        </div>

        <div className="bt-contr">
          <button className="download-btn">
            <span>Download App</span>
          </button>

          <button className="play-btn">
            <img alt="star" loading="lazy" width="24" height="24" src="/play.svg"/>
            <span>How we work?</span>
          </button>
        </div>
      </div>

      <div className="location">
        <div className="location-container">
          <div className="show-location">
            <div className="lt">
              <p>Location</p>

              <img alt="close" loading="lazy" width="24" height="24" src="/close.svg"/>
            </div>

            <p className="">Aguas Calientes</p>
          </div>

          <div className="topography">
            <div className="distance">
              <p className="d">Distance</p>

              <p className="m">173.28 mi</p>
            </div>

            <div className="elevation">
              <p className="e">Elevation</p>

              <p className="k">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
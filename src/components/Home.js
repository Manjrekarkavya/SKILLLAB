import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://mobirise.com/extensions/restaurantm6/assets/images/gallery01.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome</h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mobirise.com/extensions/restaurantm5/assets/images/gallery00.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Fresh food</h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mobirise.com/extensions/restaurantm4/assets/images/gallery05.jpg" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Eat ANYWHERE ANYTIME</h5>
              <p></p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div class="row">
          <div class="col col-md-6 col-sm-12">
            <div class="card">
              <img src="https://mobirise.com/extensions/restaurantm4/assets/images/natalia-dworniak-424223-4032x2790.jpg" />
              <div class="card-body">
                <h5 class="card-title">Eat YOU Want To Eat</h5>
                <p class="card-text">
                  “Tasty.”
                </p>
                <a
                  href="/Menu"
                  class="btn"
                  style={{ backgroundColor: "#1212" }}
                >
                  Location
                </a>
              </div>
            </div>
          </div>
          <div class="col col-md-6 col-sm-12">
            <div class="card">
              <img src="https://mobirise.com/extensions/restaurantm4/assets/images/gallery02.jpg" />
              <h5 class="card-title">Food You Love</h5>
              <p class="card-text">
                “Spicy.”
              </p>
              <a
                href="/Menu"
                class="btn"
                style={{ backgroundColor: "#1234" }}
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row" style={{ backgroundColor: "#1234" }}>
            <h3>Contact Us</h3>
            <ul>
              <li>Phone: 123558288122</li>
              <li>Email: CHEAPshop@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted">&copy; 2004 Cheap_shop</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  );
};

export default Home;
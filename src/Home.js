import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://image.freepik.com/free-photo/3d-illustration-smartphone-with-products-coming-out-screen-online-shopping-e-commerce-concept_58466-14529.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1231"
            title="Ikigai: The Japanese secret to a long and happy life"
            price={399}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
            }
          />
          <Product
            id="4953804"
            title="Amazon Brand - Solimo Hoover High Back Gaming Chair (Black & Red)"
            price={11549}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81L3wGf7jiS._SY355_.jpg"
            }
          />
          {/* <Product /> */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="OnePlus Smart Band: 13 Exercise Modes, Heart Rate & Sleep Tracking"
            price={2485}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61XPTRJZcCL._SY355_.jpg"
            }
          />
          <Product
            id="23445930"
            title="Amazon Echo Dot (4th Gen, 2020 release) "
            price={3999}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61KIy6gX-CL._SX425_.jpg"
            }
          />
          <Product
            id="3254354345"
            title="2021 Apple iPad Pro with Apple M1 chip - Silver (3rd Generation)"
            price={83500}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81a-rN2A3DS._SX679_.jpg"
            }
          />
          <Product
            id="1234"
            title="FIFA 22 (PS4)"
            price={3895}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81A6hGtMGoL._SX522_.jpg"
            }
          />

          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="1235"
            title="ONE Piece Anime Mug | Luffy | Straw HAT Pirates Anime Mug Cup 350ml"
            price={199}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/31-fFEC-mjL._AC_UL320_.jpg"
            }
          />
          <Product
            id="1236"
            title="Vivo V21e 5G (Dark Pearl, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={24990}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61fCg27sbPS._SY606_.jpg"
            }
          />
          <Product
            id="1237"
            title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
            price={699}
            rating={4}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/61l3aUqHRVL._AC_UL450_SR450,320_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Acer ED322QR 31.5 Inch (80.01 cm) Full HD Curved VA Backlit LED Monitor "
            price={22007}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81U0lF7DJHS._SX679_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

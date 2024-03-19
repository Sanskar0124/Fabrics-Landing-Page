import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover<br />
              fabric elegance
              <br /> here
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Discover fabrics with ease</span>
            <span>Forget the hassle of finding your perfect residence</span>
          </div>

          {/* <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div> */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={25} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Catlogs</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={1500} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={2000} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="https://github.com/Sanskar0124/Fabrics-Landing-Page/blob/master/assets/gifs/WhatsAppVideo2024-03-16at18.03.51_5141d442-ezgif.com-video-to-gif-converter.gif?raw=true" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

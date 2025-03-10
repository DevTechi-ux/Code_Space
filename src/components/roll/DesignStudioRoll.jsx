import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DesignStudioRoll = () => {
  return (
    <>
      <section className="roll__area-2">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Java Script</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Python</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>HTML</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>CSS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>React</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Angular</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Vue.js</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Django</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Laravel</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Flask</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>AWS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Google Cloud</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>My SQL</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>MongoDB</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>PostgreSQL</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>TensorFlow</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>AI & Machnin Learnig</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>PyTorch</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Git</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="roll__area-3">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
            dir="rtl"
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Java Script</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Python</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>HTML</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>CSS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>React</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Angular</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Vue.js</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Django</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Laravel</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Flask</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>AWS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Google Cloud</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>My SQL</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>MongoDB</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>PostgreSQL</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>TensorFlow</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>AI & Machnin Learnig</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>PyTorch</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Git</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioRoll;

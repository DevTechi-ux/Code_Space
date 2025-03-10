import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/1.png";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/2.png";
import Portfilio23 from "../../../public/assets/imgs/portfolio/2/3.png";
import Portfilio24 from "../../../public/assets/imgs/portfolio/2/4.png";
import Portfilio25 from "../../../public/assets/imgs/portfolio/2/5.svg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33">
                    Responsive <span>Design</span>
                  </h2>
                </div>
                <p className="sec-text">
                We create mobile-first, fully responsive designs that provide a seamless experience on any device.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                <button class="${className}">
                  <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                </button>
              `;
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio21}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Web <span>Development</span>
                      </Link>
                    </h2>
                    <p>
                    Our web development team builds custom websites tailored to your needs, from enterprise-level platforms to e-commerce sites. With a focus on performance, SEO, and user experience, we ensure your website not only looks great but delivers measurable results.
                    </p>
                    {/* <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="/portfolio-details">
                        App <span>Development</span>
                      </Link>
                    </h2>
                    <p>
                    We create mobile apps that offer intuitive experiences across iOS and Android platforms. Our process involves thorough research, design thinking, and iterative development to bring your idea to life, ensuring functionality and scalability.
                    </p>
                    {/* <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio23}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Cloud
                        <span>Hosting</span>
                      </Link>
                    </h2>
                    <p>
                    Techi provides cloud hosting solutions that prioritize uptime, speed, and security. Whether you’re a small business or an enterprise, we offer cloud environments that grow with your business, optimizing performance while keeping costs in check.
                      </p>
                    {/* <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio24}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        IT
                        <span>Services</span>
                      </Link>
                    </h2>
                    <p>
                    From managing IT infrastructure to cloud migration and cybersecurity, we offer comprehensive IT services that keep your operations running smoothly. Our team ensures your systems are optimized, secure, and ready for the future.
                    </p>
                    {/* <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio25}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                      Advanced  <span>API Integrations</span>
                      </Link>
                    </h2>
                    <p>
                    Our team excels in API development and integration, allowing your systems to communicate with third-party software seamlessly. We integrate payment gateways, CRMs, ERPs, and other essential services to ensure smooth operation across your digital infrastructure.
                    </p>
                    <div className="btn-common-wrap">
                      <Link href="/portfolio-details" className="btn-common">
                        View details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;

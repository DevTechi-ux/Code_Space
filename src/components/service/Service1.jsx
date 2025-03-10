import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1.webp";
import Service12 from "../../../public/assets/imgs/service/2.webp";
import Service13 from "../../../public/assets/imgs/service/3.webp";
import Service14 from "../../../public/assets/imgs/service/4.webp";
import Service15 from "../../../public/assets/imgs/service/5.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Interaction <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web & Mobile <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Motion & Branding <br />
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Digital <br /> Maketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Game <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Illustrations & <br /> Prototype
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service_item-6 has_service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        "Interaction design ensures seamless and intuitive user engagement with software and websites by focusing on usability and responsive feedback."
                        </h2>
                        <p>
                        "Effective interaction design enhances user experience by optimizing how users interact with elements, ensuring clarity, accessibility, and efficiency in navigating digital interfaces."
                        </p>
                        <ul>
                          <li>+ User-Centered Focus		</li>
                          <li>+ Consistency	</li>
                          <li>+ Affordance</li>
                          <li>+ Accessibility	</li>
                          <li>+ Usability</li>
                          <li>+ Responsiveness</li>

                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link> */}
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          
                       "Web and mobile development focuses on creating responsive, user-friendly applications that deliver seamless experiences across various devices and platforms."  
                        </h2>
                        <p>
                          At Techi, we specialize in building powerful and user-friendly websites and mobile applications that engage users and drive business growth. Whether you're launching a new platform or revamping an existing one, we ensure seamless performance and scalability.
                          Our team uses cutting-edge technology to deliver customized, responsive, and high-performing solutions across all platforms.
                        </p>
                        <ul>
                          <li>+ Web Development </li>
                          <li>+ Mobile App Development  </li>
                          <li>+ E-commerce Solutions	  </li>
                          <li>+ Progressive Web Apps (PWAs)	  </li>
                          <li>+ User Interface (UI) & User Experience (UX) Design   </li>
                          <li>+ API Development	</li>
                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        "Motion and branding design combines dynamic visuals and consistent brand elements to create engaging, memorable experiences that communicate a brand's identity and message effectively."
                        </h2>
                        <p>
                        Techi is an innovative technology company dedicated to providing cutting-edge solutions in software development, design, and digital transformation. With a focus on delivering exceptional user experiences and seamless integrations, Tevhi empowers businesses to stay ahead in an ever-evolving digital landscape.
                        </p>
                        <ul>
                          <li>+ Motion Design </li>
                          <li>+ Branding Design </li>
                          <li>+ UI/UX Design </li>
                          <li>+ Focused on delivering </li>
                          <li>+ Empowers businesses </li>
                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Launch Your SaaS Business with Ready-to-Go Whitelabel Solutions.
                        </h2>
                        <p>
                          Techi offers pre-built SaaS platforms that are ready to launch and scale. Our whitelabel solutions are perfect for businesses looking to break into the software-as-a-service market without the time and cost of building from scratch.
                          With our customizable and scalable platforms, you can quickly deploy and start generating revenue.
                        </p>
                        <ul>
                          <li>+ Whitelabel SaaS Solutions	</li>
                          <li>+ Custom Branding and Configuration	</li>
                          <li>+ Scalable SaaS Platforms   </li>
                          <li>+ Subscription Management Systems	</li>
                          <li>+ Cloud Hosting and Maintenance	</li>
                          <li>+ SaaS Analytics and Reporting Tools </li>
                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Bring Your Game Ideas to Life with Techi’s Expert Game Development Services.
                        </h2>
                        <p>
                          Techi specializes in creating engaging and immersive games, including fantasy games, mobile games, and interactive experiences. Whether you're looking to develop a new fantasy sports game or an innovative app, our experienced team of game developers is here to help.
                          We use the latest tools and technologies to build games that captivate audiences and stand out in the market.
                        </p>
                        <ul>
                          <li>+ Fantasy Game Development</li>
                          <li>+ Mobile Game Development</li>
                          <li>+ 2D and 3D Game Design</li>
                          <li>+ Multiplayer and Online Gaming</li>
                          <li>+ Game Testing and Quality Assurance</li>
                          <li>+ Game Monetization Strategies</li>
                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div> */}
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Illustrations & Prototype
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        {/* <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
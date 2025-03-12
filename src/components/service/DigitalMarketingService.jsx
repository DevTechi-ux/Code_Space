import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });


          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Our marketing <br /> Services
                </h3>
                <p>
                Our mission is to transform businesses with technology, helping them reach new heights in today’s competitive digital landscape. We strive to offer seamless solutions that meet your goals, drive innovation, and create lasting value.													.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div className="service__item-3 service_animation">
                  <h3>
                    <div href="/service-details" className="service__title-3">
                      SEO <br />
                      & Email Marketing
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Our SEO strategies are designed to elevate your website’s visibility and drive more qualified traffic. We focus on optimizing your site for both search engines and users, ensuring that your content is discoverable and relevant. 
                    Engage and retain customers with personalized email marketing campaigns. We create targeted email strategies that speak directly to your audience, enhancing brand loyalty and driving conversions		
                    </p>
                    <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    {/* <div className="btn_wrapper">
                       <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link> 
                    </div> */}
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <div href="/service-details" className="service__title-3 ">
                      Content Marketing  <br />
                      Social Marketing
              
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Content is king, and we’re here to help you create high-quality, valuable content that resonates with your audience
                    Engage with your customers where they spend their time – on social media. Our social media marketing services help you build a strong online community and foster deeper relationships with your audience.
                    </p>
                    <ul className="">
                      <li>+ SEO-Optimized Content</li>
                      <li>+ Diverse Content Types</li>
                      <li>+ Content Strategy</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      {/* <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/2.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <div href="/service-details" className="service__title-3">
                      App Development
                      <br />
                      Game Development
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Tailor-made solutions designed to meet your business goals, from e-commerce apps to productivity tools, ensuring a seamless user experience.
                    Build apps that work smoothly on both iOS and Android using frameworks like Flutter, React Native, or Xamarin, offering a cost-effective and efficient approach.

                    </p>
                    <ul className="">
                      <li>+ Native App Development</li>
                      <li>+ Cross-Platform Development</li>
                      <li>+ pp Testing & Quality Assurance</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      {/* <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/3.png)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <div href="/service-details" className="service__title-3">
                      Pre build Saas Software
                      <br />
                      White label Solutions
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Our pre-built SaaS products are designed to streamline business operations, enhance productivity, and improve user experience without the need for extensive development
                    Skip the lengthy development process and launch a solution under your brand almost immediately. Our White Label products are ready to be branded and deployed in no time
                    </p>
                    <ul className="">
                      <li>+ Fast Time-to-Market</li>
                      <li>+ Focus on Growth</li>
                      <li>+ Cloud-Based Scalability</li>
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      {/* <Link
                        href="/service-details"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link> */}
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
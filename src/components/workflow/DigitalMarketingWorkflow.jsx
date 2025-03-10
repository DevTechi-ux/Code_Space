import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Counter3 from "../../../public/assets/imgs/thumb/counter-3.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingWorkflow = () => {
  const workflowWrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          var workflow_section_3 = workflowWrapper.current;
          if (workflow_section_3) {
            let duration = 1,
              sections = gsap.utils.toArray(".wf_panel"),
              sectionIncrement = duration / (sections.length - 1),
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".workflow__wrapper-3",
                  pin: true,
                  scrub: 1,
                  start: "top top",
                  end: "+=5000",
                },
              });

            tl.to(sections, {
              xPercent: -100 * (sections.length - 1),
              duration: duration,
              ease: "none",
            });

            sections.forEach((section, index) => {
              let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                force3D: true,
                paused: true,
              });
              addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              });
              index || tween.progress(1);
            });

            function addSectionCallbacks(
              timeline,
              { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
            ) {
              let trackDirection = (animation) => {
                  let onUpdate = animation.eventCallback("onUpdate"),
                    prevTime = animation.time();
                  animation.direction = animation.reversed() ? -1 : 1;
                  animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                      animation.direction = time < prevTime ? -1 : 1;
                      prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                  });
                },
                empty = (v) => v;
              timeline.direction || trackDirection(timeline);
              start >= 0 &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                      param
                    ),
                  start
                );
              end <= timeline.duration() &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                      param
                    ),
                  end
                );
            }
          }
          for (let i = 1; i < 5; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              textContent: 0,
              duration: 1,
              delay: 3,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
              scrollTrigger: {
                trigger: ".counter__number",
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3" ref={workflowWrapper}>
          <div className="choose-wrapper wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="choose-title-wrapper">
                    <h2 className="choose-title title-anim">
                      why <br /> choose us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="research__area wf_panel pt-150">
            <div className="container inner_content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      why <br />
                      choose us
                    </h2>
                    <h3 className="sec-title">
                      Web Development,App Development, UI & UX
                    </h3>
                    <p>
                    In the ever-evolving world of technology, Web Development, App Development, and UI/UX design are at the forefront of creating innovative digital solutions. By combining cutting-edge tools and creative strategies, we transform ideas into interactive realities that are not only functional but also visually captivating. From developing dynamic web platforms to building intuitive mobile applications, every project is designed with a user-first approach, ensuring seamless navigation and engaging experiences.
                    </p>
                  </div>
                  <ul className="research__tools">
                    <li>
                      <a href="#">Google</a>
                    </li>
                    <li>
                      <a href="#">pinterest</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="research__list">
                    <div className="research__item">
                      <div className="research__number">
                        <span>60%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Strategy</h4>
                        <p>
                       
                       At the heart of our strategy lies a commitment to innovation, user-centric design, and technological excellence. We begin by understanding our clients’ goals, market trends, and end-user needs, enabling us to craft tailored solutions that drive impact
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>95%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Development</h4>
                        <p>
                        Our development approach is built on a foundation of innovation, precision, and adaptability. We leverage the latest technologies and frameworks to deliver scalable, secure, and high-performance software solutions tailored to meet unique business requirements
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>70%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Testing</h4>
                        <p>
                        Quality assurance is the cornerstone of our development process, ensuring that every solution we deliver meets the highest standards of functionality, security, and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="counter__area-3 wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      Why <br />
                      Choose Us
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="counter__wrapper-3">
                    <div className="counter__item-3">
                      <h2 className="counter__number count1">2k</h2>
                      <p>
                        Project <br />
                        completed
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count2">500+</h2>
                      <p>
                        Happy <br />
                        customers
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count3">15</h2>
                      <p>
                        Years <br />
                        experiences
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count4">98</h2>
                      <p>
                        Awards <br />
                        achievement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="counter__img-3">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Counter3}
                      alt="Counter Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA area start */}
          <div className="cta__area-3 wf_panel">
            <div className="container pt-150 pb-150">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content-3">
                    <p className="cta__sub-title-2">
                      Have you project in mind?
                    </p>
                    <h2 className="cta__title-2">
                      Let’s make something great together!
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span>Contact <br />
                        with us <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA area end */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWorkflow;
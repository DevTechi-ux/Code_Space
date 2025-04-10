import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });

        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl col-xl col-lg">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Pricing Table</h2>
                <h3 className="sec-title title-anim">
                  Be kind to your <br />
                  mind
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>
                    What services does CodeSpace provide?	
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>		
                        CodeSpace offers software development, digital marketing, app development, game development, and white-label SaaS solutions.							
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header>
                    How can CodeSpace help my business grow?		
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        By providing end-to-end digital support, from website creation to marketing strategies, we help businesses improve visibility and customer engagement.									
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header>
                    What makes CodeSpace software solutions unique?		
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        Our prebuilt SaaS and white-label solutions provide businesses with ready-to-use, fully branded software, saving development time and effort.								
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header>
                    Does CodeSpace offer tailored marketing strategies?			
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        Yes! Our strategies are personalized based on your business goals, ensuring maximum ROI and increased online presence.							
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header>
                      What technologies do you use?		
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                        A: We use a range of technologies including JavaScript, Python, React, AWS, Docker, and more to build scalable, secure, and high-performance solutions.									
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        gsap.to(".fade_bottom", {
          scrollTrigger: {
            trigger: ".fade_bottom",
            start: "top center+=200",
            markers: false,
          },
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <section className="brand__area">
      <div className="container g-0 line pt-140 pb-130">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper">
              <h2 className="sec-sub-title title-anim">
                Empowering Your Future with Tailored Financial Solutions
              </h2>
              <h3 className="sec-title title-anim">
                From business loans to personal financial growth, we help you secure the interest and stability of your future.
              </h3>
            </div>
          </div>

          <div className="col-xxl-12">
            <div className="brand__list">
              <div className="brand__item fade_bottom">
                <a href="https://www.Stockpip.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    priority
                    width={150}
                    height={100}
                    src={Brand1} // Replace Brand1 with the actual image source
                    alt="Example Company Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAgencyBrand;
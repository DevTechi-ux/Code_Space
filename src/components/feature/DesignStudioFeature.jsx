import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import FeatureIcon1 from "../../../public/assets/imgs/feature/icon/1.png";
import FeatureIcon2 from "../../../public/assets/imgs/feature/icon/2.png";
import FeatureIcon3 from "../../../public/assets/imgs/feature/icon/3.png";
import FeatureIcon4 from "../../../public/assets/imgs/feature/icon/4.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DesignStudioFeature = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          let animation__feature2 = gsap.utils.toArray(
            ".animation__feature2 .feature__item"
          );
          if (device_width < 1023) {
            animation__feature2.forEach((item, i) => {
              gsap.set(item, { opacity: 0, y: 60 });
              let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
              });
            });
          } else {
            gsap.set(".animation__feature2 .feature__item", {
              opacity: 0,
              y: 40,
            });
            gsap.to(".animation__feature2 .feature__item", {
              scrollTrigger: {
                trigger: ".animation__feature2",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power4.out",
              stagger: 0.3,
            });
          }
        });
        return () => tHero.revert();
      }, 1000);
    }
  }, []);
  return (
    <>
      <section className="feature__area-2 pt-130">
        <div className="feature__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">
                    Features are more helpful to create creative shapes as well.
                  </h2>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                <div className="feature__text text-anim">
                  <p>
                    At Techi constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective. The unthinkable today becomes inevitable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature__btm">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="feature__list animation__feature2">
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon1}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Web Development</h3>
                    <p>
                    We design responsive, high-performing websites 
                    that represent your brand and engage your audience.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon2}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">App Development</h3>
                    <p>
                    From ideation to launch, we build user-friendly 
                    mobile applications with seamless performance across platforms.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      className=""
                      src={FeatureIcon3}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">Cloud Hosting</h3>
                    <p>
                    Our scalable cloud hosting solutions ensure your website 
                    and applications are fast, secure, and always accessible.
                    </p>
                  </div>
                  <div className="feature__item">
                    <Image
                      priority
                      width={108}
                      height={108}
                      src={FeatureIcon4}
                      alt="Feature Icon"
                    />
                    <h3 className="feature__title">IT Services</h3>
                    <p>
                    Complete IT support, from infrastructure management to security and consulting services for your business.
                    </p>
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

export default DesignStudioFeature;

import { useState, useEffect, useRef } from "react";

const slides = [
  {
    lg: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/88db64a9284d0244.jpeg?q=90",
    sourceMd: "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    sourceLg: "https://rukminim2.flixcart.com/fk-p-flap/990/480/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/1980/960/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    src: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=90",
    srcSet: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/960/460/image/aa64438690deb9e9.jpeg?q=60 2x, "
  },
  {
    lg: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/88db64a9284d0244.jpeg?q=90",
    sourceMd: "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    sourceLg: "https://rukminim2.flixcart.com/fk-p-flap/990/480/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/1980/960/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    src: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=90",
    srcSet: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/960/460/image/aa64438690deb9e9.jpeg?q=60 2x, "
  },
  {
    lg: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/88db64a9284d0244.jpeg?q=90",
    sourceMd: "https://rukminim2.flixcart.com/fk-p-flap/1580/770/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    sourceLg: "https://rukminim2.flixcart.com/fk-p-flap/990/480/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/1980/960/image/aa64438690deb9e9.jpeg?q=60 2x, ",
    src: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=90",
    srcSet: "https://rukminim2.flixcart.com/fk-p-flap/480/230/image/aa64438690deb9e9.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/960/460/image/aa64438690deb9e9.jpeg?q=60 2x, "
  }
]

const BanerSlider = () => {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);
  const length = slides.length;

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
  };

  const stopAuto = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
    startAuto();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
    startAuto();
  };

  return (
    <section className="xl:h-![calc(100%-16px)] bg-[#f8f8f8] " >
      <div className="bg-white mb-4 flex flex-col relative z-0 mx-4 mt-3 xl:!mb-4 xl:!mx-0 xl:mt-0">
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out "
            style={{
              width: `${length * 100}%`,
              transform: `translateX(-${current * (100 / length)}%)`,
            }}
          >
            {slides.map((src, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 snap-start rounded-[16px] overflow-hidden xl:!rounded-none xl:overflow-clip "
                style={{ width: `${100 / length}%` }}
              >
                <img
                  src={src.lg}
                  className=" w-full object-cover aspect-[41/20] xl:aspect-[211/35] hidden xl:block"
                  loading="eager"
                  fetchPriority="high"
                />
                <picture className="xl:!hidden">
                  <source srcSet={src.sourceLg} media="(min-width: 1192px)" />
                  <source srcSet={src.sourceMd} media="(min-width: 768px) and (max-width: 1191px)" />
                  <img src={src.src} alt="" srcSet={src.srcSet} loading="" className="block w-full object-cover aspect-[41/20] xl:aspect-[211/35]" />
                </picture>
              </div>
            ))}
          </div>


          <button
            onClick={prevSlide}
            className="hidden left-btn lg:!flex absolute left-0 top-1/2 
                        -translate-y-1/2 w-10 h-[88px] 
                        bg-[#fff] items-center justify-center"
          >
            <span
              className="absolute right-4 top-[50%] scale-100 text-black -translate-y-1/2 transform
                -rotate-90
                before:content-[''] before:relative
                before:inline-block
                before:border-[2px] before:border-t-0 before:border-l-0
                before:border-[#878787]
                before:h-[6px] before:w-[6px]
                before:rotate-[225deg]"
            ></span>
          </button>


          <button
            onClick={nextSlide}
            className="hidden right-btn lg:flex absolute 
                      right-0 top-1/2 -translate-y-1/2 w-10 
                      h-[88px] bg-[#fff] items-center justify-center"
          >
            <span
              className="absolute left-4 top-[50%] scale-100 text-black -translate-y-1/2 transform
                -rotate-90
                before:content-[''] before:relative
                before:inline-block
                before:border-[2px] before:border-t-0 before:border-l-0
                before:border-[#878787]
                before:h-[6px] before:w-[6px]
                before:rotate-[45deg]"
            ></span>
          </button>


          <div className="timer w-[1248px] pt-2 pb-3 flex flex-row justify-center items-center bg-[rgba(0,0,0,0.00)] relative z-0 mx-auto">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-1 rounded-[2px] mx-1 ${idx === current
                  ? "bg-[rgba(0,0,0,0.6)]"
                  : "bg-[rgba(0,0,0,0.13)]"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanerSlider;
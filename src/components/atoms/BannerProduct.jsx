
const BannerProduct = ({src1, src2, img, imgSrc}) => {

  return (
    <div className="w-[216px] ">
      <div className="m-2 flex-[1_1_0%] flex flex-col items-stretch relative">
        <div className="w-full h-full">
            <div className="items-center px-3 py-6">
                <div className="">
                    <picture>
                        <source
                            srcSet={src1}
                            media="(min-width: 1192px)"
                        />
                        <source
                            srcSet={src2}
                            media="(min-width: 768px) and (max-width: 1191px)"
                        />
                        <img
                            src={img}
                            alt="Product"
                            aria-busy="false"
                            data-highres-loaded="false"
                            loading="lazy"
                            srcSet={imgSrc}
                            fetchpriority="auto"
                            style={{
                            filter: "none",
                            opacity: 1,
                            transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            width: "100%",
                            margin: "auto",
                            display: "block",
                            objectFit: "contain",
                            aspectRatio: "1 / 1",
                            }}
                        />
                    </picture>
                    
                </div>

                <div className="flex flex-col items-stretch relative pt-3 text-center text-[14px] leading-5 tracking-[-.01px] whitespace-nowrap">
                    <div className="">OPPP K13x 5G</div>
                    <div className="">From ₹9,499*</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerProduct

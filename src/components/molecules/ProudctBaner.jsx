import BannerProduct from "../atoms/BannerProduct"
import { productDetails } from "../../data/ProductDetails-Home"
import { useState } from "react"


const ProudctBaner = () => {

    const [currentIndex, setcurrentIndex] = useState(0);
    const visible = 6;

    const maxIndex = Math.ceil(productDetails.length / visible) - 1;

    const nexSlide = () => {

        if (currentIndex < maxIndex) {
            setcurrentIndex(currentIndex + 1)
        }

    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setcurrentIndex(currentIndex - 1)
        }
    }


    return (

        <div className="h-![calc(100% - 16px) bg-white mt-0 hidden xl:block">
            <div className="">
                <div className="bg-[#ffffff] mb-4 flex flex-col items-stretch
                                relative no-underline">
                    <div className="flex flex-col items-stretch relative z-0">
                        <div className="relative flex-1 flex items-center">
                            <div className="p-4">
                                <div className="text-black inline whitespace-nowrap 
                                max-w-full text-ellipsis align-middle
                                text-[17px] leading-[24px] -tracking-[.01px]
                                [font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif]
                                md:!text-[22px] md:!leading-[30px] md:-tracking-[.02px]"
                                >Best deals on smartphones</div>
                            </div>
                        </div>

                        <div className="flex items-stretch flex-col relative">
                            <div className="flex flex-row transition-transform duration-500 "
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visible)}%)`,
                                width: `${(productDetails.length / visible) * 100}%`
                            }}>
                            {productDetails.map(product => (
                                <div key={product.id}
                                    className="h-[244px] relative -top-4"
                                    style={{ width: `${100 / visible}%` }}>
                                    <BannerProduct
                                        key={product.id}
                                        src1={product.srcSet1}
                                        src2={product.srcSet2}
                                        img={product.img}
                                        imgSrc={product.imgSrcSet} />
                                </div>
                            ))}
                        </div>
                        </div>
                        
                        

                        <button className={`absolute right-0 top-40 bg-white w-10 h-[88px] rounded-[3px] text-center flex justify-center items-center shadow-[0_1px_4px_rgba(0,0,0,0.12)] 
                            ${currentIndex === maxIndex ? "hidden" : "absolute right-0 top-20 bg-white w-10 h-[88px] rounded-[2px] text-center flex justify-center items-center"} `}
                            onClick={nexSlide}>
                            {">"}
                        </button>


                        <button className={`absolute left-0 top-40 w-10 h-[88px] rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.12)]
                                            flex justify-center items-center
                            ${currentIndex === 0
                                ? 'hidden'
                                : 'bg-white'}`}
                            onClick={prevSlide}>
                            {"<"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProudctBaner

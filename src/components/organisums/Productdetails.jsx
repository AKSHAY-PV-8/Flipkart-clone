import { useParams } from "react-router-dom"
import { productData } from "../../data/ProductData";
import { useRef, useState } from "react";
import ButNowIcon from "../../assets/img/buynow.svg"

const Productdetails = () => {

    const [scrollIndex, setScrollIndex] = useState(0);
    const listRef = useRef(null);
    const visibleCount = 7;
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id))
    const totalImages = product.smallImg.length;

    const handleScrollUp = () => {
        if (scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    }
     

    const handleScroleDown = () => {
        if (scrollIndex < totalImages - visibleCount) {
            setScrollIndex(scrollIndex + 1);
        }
    }

    return (
        <section className="mx-auto max-w-[1366px] min-w-[1128px] p-0 w-full relative">
            <div className="bg-white p-4 flex flex-row ">
                <div className="flex flex-col sticky top-16 z-2 w-[41.66%]">
                    <div className="">
                        <div className="relative">
                            <div className="flex items-stretch relative">
                                <div className="h-[448px] overflow-hidden flex flex-row">
                                    <div className="h-[832px] overflow-hidden">
                                        <ul
                                            ref={listRef}
                                            className="transition-transform duration-500"
                                            style={{
                                                transform: `translateY(-${scrollIndex * 80}px)`
                                            }}>
                                            {product.smallImg.map((img, i) => (
                                                <li className="h-16 w-16 p-[5px] border-[#f0f0f0] border-r-0" key={i}>
                                                    <div className=" w-full h-full relative">
                                                        <div className="w-full h-full">
                                                            <img src={img} className="max-h-full max-w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></img>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="top-0 border-b-0 block absolute w-[60px] h-6 text-center bg-[#fffffffa] cursor-pointer "
                                        onClick={handleScrollUp}>
                                        <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="rotate-90 relative t-1 text-center left-6 top-1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class=""></path></svg>
                                    </div>

                                    <div className="bottom-0 border-t-0 block absolute w-[60px] h-6 text-center bg-[#fffffffa] cursor-pointer "
                                        onClick={handleScroleDown}>
                                        <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="-rotate-90 relative t-1 text-center left-6 top-1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class=""></path></svg>
                                    </div>
                                </div>

                                <div className="flex items-center flex-1 justify-center relative border border-[#f0f0f0]">
                                    <div className="">
                                        <img loading="eager" alt="Nothing Phone (3a) (White, 256 GB)" src={product.largeImg} fetchpriority="high" srcset={product.srcSet}></img>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-[15px] top-[15px] w-9 h-9 
                                        rounded-[50%] border border-[#f0f0f0] 
                                        shadow-[0_1px_4px_0_rgba(0, 0, 0, .1)] 
                                        p-[9px_12px_12px_9px] bg-white" >
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="red" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full block">
                        <div className="ml-16 mt-3">
                            <ul className="w-full flex flex-row flex-wrap">
                                <li className="w-[50%] inline-block align-top">
                                    <button className="py-[18px] text-[#fff] flex
                                                        px-2 w-[98%] border-none floeat-left bg-[#ff9f00]
                                                        uppercase text-[16px] font-medium align-super cursor-pointer
                                                        [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif;]">
                                        <svg className=" inline-blockmr-1 h-[16px] w-[16px]" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                            <path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
                                        </svg>
                                        Add to cart
                                    </button>
                                </li>

                                <li className="w-[50%] inline-block align-top ">
                                    <button className="py-[18px] text-[#fff] flex
                                                        px-2 w-[98%] border-none floeat-left bg-[#fb641b]
                                                        uppercase text-[16px] font-medium align-super cursor-pointer
                                                        [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif;]">
                                        <span
                                            className="inline-block align-middle w-[20px] h-[20px]
                                                        bg-no-repeat bg-center bg-contain mr-2 "
                                            style={{ backgroundImage: `url(${ButNowIcon})` }}
                                        ></span>
                                        Buy now
                                    </button>

                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="pl-6 flex flex-col w-[66.66%]">
                    <div className="flex flex-row ">
                        <div className="flex-grow-1 overflow-auto block">
                            <div className="text-[12px] text-[#878787] inline-block">
                                <a href="" className="max-w-20 whitespace-nowrap overflow-hidden text-ellipsis inline-block align-middle no-underline">Home</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="h-[7px] w-[20px] rotate-180 align-middle inline-block"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                            </div>
                        </div>

                        <div className="flex-basis-[90px] max-w-[90px] block w-full">
                            <div className="text-right align-middle relative -left-8">
                                <div className="inline-block text-right 
                                            [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif] 
                                            text-[14px] font-normal leading-[1.4]">
                                    <input type="checkbox" />
                                </div>
                                <label htmlFor="" className="align-middle ml-2 text-[14px] cursor-pointer
                                                        text-right [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]
                                                        font-normal text-[#212121] relative -top-0.5"
                                >Compare
                                </label>
                            </div>
                        </div>

                        <div className="flex-basis-[90px]">
                            <div className="text-right align-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="inline-block relative -top-0.5"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" class="g9gS7K" fill="#c2c2c2" fill-rule="evenodd"></path></svg>
                                <label htmlFor="" className="align-middle ml-[5px] text-[14px] cursor-pointer
                                                        text-right [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]
                                                        font-normal text-[#212121] relative -top-0.5">Share</label>
                            </div>
                        </div>

                    </div>

                    <div className="flex ">
                        <div className="mt-1.5">
                            <div className="">
                                <h1 className="text-black text-[18px] font-normal">
                                    {product.name}
                                </h1>
                            </div>

                            <div className=" flex">
                                <div className="">
                                    <div className="align-middle mt-1.5">
                                        <span className="leading-normal inline-block text-white px-0.5 pr-1 pl-1.5 rounded-[3px] font-medium text-[12px] align-middle bg-[#388e3c]">
                                            {product.stars}
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="
                                    mt-0.5 ml-0.5 inline-block"></img>
                                        </span>

                                        <span className="pl-2 font-normal text-[#878787] text-[14px]">
                                            <span>{product.rating} Ratings</span> & <span>{product.review} Reviews</span>

                                        </span>
                                    </div>
                                </div>

                                <span className="ml align-middle">
                                    <img height="21" src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" className="align-middle h-[21px] inline-block"></img>
                                </span>
                            </div>

                            <div className="font-medium text-left text-[#388e3c] mt-3 -mb-3">
                                <span>Extra ₹4000 off</span>
                            </div>

                            <div className="flex pt-3">
                                <div className="flex">
                                    <div className="text-[28px] align-sub inline-block">₹{product.price}</div>

                                </div>

                                <div className="mt-3.5 ml-2 bg-bla">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-[18px] inlin"><defs><circle id="b" cx="8" cy="8" r="8"></circle><filter id="a" width="130%" height="130%" x="-15%" y="-8.8%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius=".4" result="shadowSpreadOuter1"></feMorphology><feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(2 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"></use><use fill="#FCFCFC" stroke="#000" stroke-opacity=".3" stroke-width=".8" xlink:href="#b"></use></g><text fill="#1D1D1D" font-family="Roboto-Medium, Roboto" font-size="11" font-weight="400" opacity=".59" transform="translate(2 1)"><tspan x="6.6" y="12.2">i</tspan></text></g></svg>
                                </div>
                            </div>

                            <div className="text-[14px] font-normal leading-[20px]">
                                <div className="pb-1">
                                    <span>+ ₹{product.protectFee} Protect Promise Fee</span>
                                    <span className="text-blue-600 font-medium">Learn more</span>
                                    <div className="">Secure delivery by 11 Oct, Saturday</div>
                                </div>
                            </div>

                            <div className="text-[16px] leading-[24px] mt-0.5 mb-2 flex">
                                <div className="">Or Pay </div>
                                <div className="">₹{product.payFee} + </div>
                                <div className="h-3 w-3 relative my-auto">
                                    <img loading="lazy" class="DByuf4" alt="" src="https://rukminim2.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"></img>
                                </div>
                                <div className="">100</div>
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <div className="mt-2">
                            <div className="text-[16px] font-medium">Available offers</div>
                        </div>

                        <div className="leading-[1.43] text-[14px] relative">
                            <div className="">
                                {product.offers.map(offer => (
                                    <span className="mt-3 w-full flex flex-row">
                                        <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="max-h-[18px] max-w-[18px]"></img>
                                        <li className="-mt-0.5 w-[94%] inline-block align-top">
                                            <span className="font-medium pr-1">Bank Offer</span>
                                            <span className="leading-[1.43] text-[14px]">{offer}</span>
                                            <span className="text-blue-600 font-medium inline-block ml-[5px] cursor-pointer">T&C</span>
                                        </li>
                                    </span>
                                ))}
                            </div>
                            <button></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Productdetails

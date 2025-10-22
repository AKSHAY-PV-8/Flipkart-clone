import React from 'react'
import HomeNavbar from "../components/organisums/HomeNavbar"
import SortFilterBtns from "../components/atoms/SortFilterBtns"

const MobileProductList = () => {
    const icon3 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
    const Links = ["MOTOROLA mobiles", "opp Mobiles", "Gianee Mobiles", "Vivo Mobiles",
        "Smartphones Mobiles", "Collpad Mobiles", "Cellecor Mobiles",
        "Mobiles & Acceessories", "Lava Mobiles"]
    return (
        <div>
            <HomeNavbar style={"xl:hidden"} icon2={icon3} text3={true} label2={"login"} homePage={false} />
            <SortFilterBtns />

            <div className="w-[346px] flex items-stretch flex-col lg:hidden">

                <div className="!p-[12px_5px_4px_0px] block text-[#878787] align-top w-full xl:hidden">
                    <div className="tracking-1.45 text-2">
                        {Links.map(link => (
                            <a href="" className=" no-underline border-none leading-1.45 text-2 
                            [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]">{link}</a>
                        ))}
                    </div>
                </div>

                <div className="w-[375px] justify-center items-center xl:hidden">
                    <div className="flex realtive w-[375px] h-[167px]">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-ads/750/334/dp-doc/1758525704418-cmfusstlu5bav0qajv4sc093q-5944fa3a07e217104f872e64a5464ab6b6394d69f6fce32c45761855649f0638.jpg?q=90"
                            alt=""
                            aria-busy="false"
                            data-highres-loaded="true"
                            loading="eager"
                            fetchpriority="auto"
                            height="167"
                            width="375"
                            className="w-full h-full object-cover transition-all duration-500"
                            style={{
                                filter: "none",
                                opacity: 1,
                                margin: "auto"
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-clo items-start w-[346px flex-1 relative xl:hidden">
                    <div className="min-h-[154px] py-3 flex items-stretch relative font-[12px]">
                        <div className="flex justify-start items-center ml-[6px] mt-4 h-[120px] overflow-hidden">
                            <div className="w-[96px] h-[120px]">
                                <img
                                    src="https://rukminim2.flixcart.com/image/192/240/xif0q/mobile/h/u/i/-original-imahgfmyczqxhtm2.jpeg?q=90&crop=false"
                                    alt=""
                                    className="w-full h-full object-contain transition-all duration-500"
                                    aria-busy="false"
                                    data-highres-loaded="false"
                                    loading="lazy"
                                    srcSet="https://rukminim2.flixcart.com/image/96/120/xif0q/mobile/h/u/i/-original-imahgfmyczqxhtm2.jpeg?q=80&crop=false 1x, https://rukminim2.flixcart.com/image/192/240/xif0q/mobile/h/u/i/-original-imahgfmyczqxhtm2.jpeg?q=60&crop=false 2x"
                                    fetchpriority="auto"
                                    height="120"
                                    width="96"
                                    style={{
                                        filter: "none",
                                        opacity: 1,
                                        margin: "auto"
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-start pl-[120px] pr-[20px] mt-[12px] mb-[6px] relative">
                            <a href="">
                                <div className="mr-6 mb-1 text-balck overflow-hidden text-[14px] leading-[20px] -tracking-[0.01px]">
                                    Name
                                </div>
                            </a>

                            <div className="flex flex-row items-center mb-1.5 ">

                                <div className="flex flex-row relative items-center justify-start pr-0.5 mt-0.5 ">
                                    <div className="flex flex-row py-[5px] items-stretch">
                                        <div className="scale-[0.8] h-3 mr-1 items-center justify-center w-3">
                                            <div className="flex items-stretch flex-col relative">
                                                <svg width="24" height="24" fill="green" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="scale-[0.8] h-3 mr-1 items-center justify-center w-3">
                                            <div className="flex items-stretch flex-col relative">
                                                <svg width="24" height="24" fill="green" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                                                </svg>
                                            </div>
                                        </div>


                                        <div className="flex items-center relative">
                                            <div className="text-[12px] leading-[18px] tracking-0 text-[#717478] ml-1 pb-0.5 max-w-full 
                      whitespace-nowrap align-middle text-ellipsis overflow-hidden">
                                                (1,59,086)
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex relative w-[60px] h-4 ">
                                    <img
                                        src="https://rukminim1.flixcart.com/www/120/32/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=90"
                                        alt="logo"
                                        className="w-full h-full mx-auto object-contain transition-all duration-500 ease-in-out opacity-100"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <div className="flex flex-row justify-start items-center flex-shrink-1">
                                    <div className="mr-1 items-stretch flex ">
                                        <div className="items-cente flex flex-row">
                                            <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
                                            <div className="text-[17px] leading-[24px] -tracking-[0.1px] text-[#008c00] whitespace-pre-wrap break-words">
                                                1%
                                            </div>
                                        </div>

                                        <div className="mr-1 items-stretch flex">
                                            <div className="text-[17px] leading-[24px] -tracking-[0.1px] text-[#717478] line-through">₹69,900</div>
                                        </div>

                                        <div className="mr-1 items-stretch flex">
                                            <div className="text-[17px] leading-[24px] -tracking-[0.1px] text-black">₹68,900</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[6px] flex-wrap flex items-center flex-row">
                                <div className="text-[12px] text-black [font-family: Roboto, Helvetica, Arial, sans-serif] ">Upto</div>
                                <div className="bg-transparent text-[12px] text-black font-medium font-['Roboto'] not-italic">
                                    ₹43,850
                                </div>
                                <div className="bg-transparent text-[12px] text-black font-normal font-sans not-italic">
                                    Off on Exchange
                                </div>
                            </div>

                            <div className="mt-1.5 flex-wrap flex items-center flex-row ">
                                <div className="bg-transparent text-[12px] text-[#666666] font-normal font-sans not-italic">
                                    1 year warranty by APPLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MobileProductList

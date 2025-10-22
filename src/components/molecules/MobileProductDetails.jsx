import React from 'react'

const MobileProductDetails = () => {
    return (
        <div>

            <section className="ProductDetailsNavbar block xl:hidden ">
                <div className="flex basic-auto flex-col items-stretch relative bg-[#cfebfe]">
                    <div className="flex basis-auto flex-row items-stretch relative bg-[#cfebfeff] my-3 ml-2">
                        <a href="" className="flex items-center flex-col relative justify-center w-10 h-10">
                            <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M27 16H5M14 7l-9 9 9 9" stroke="#333333ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </a>

                        <a href="" className="flex items-center flex-row relative border-[1.6px] rounded-[12px] flex-1 bg-white border-[#58abfaff] h-10">
                            <div className="flex basis-auto flex-col items-center relative justify-center w-10 h-10">
                                <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg>
                            </div>

                            <div className="text-[#707070ff] inline whitespace-nowrap text-left align-middle max-w-full overflow-hidden text-ellipsis flex-1">
                                Search for products
                            </div>
                        </a>

                        <div className="flex items-stretch basis-auto flex-col shrink-0 relative">
                            <a href="" className="flex items-center h-10 w-10 overflow-hidden justify-center mx-2">
                                <div className="flex items-stretch -mr-2 relative">
                                    <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="flex flex-col items-stretch relative overflow-hidden ">
                        <a href="" className="flex items-stretch flex-1 flex-col relative overflow-hidden border-[16px] border-white">
                            <div className="flex flex-1 items-stretch relative">
                                <div className="aspect-[36/5] w-full">
                                    <picture>
                                        <source
                                            srcSet="
      https://rukminim1.flixcart.com/fk-p-flap/1470/200/image/a11d836fbdf82809.jpeg?q=80 1x,
      https://rukminim1.flixcart.com/fk-p-flap/2940/400/image/a11d836fbdf82809.jpeg?q=60 2x
    "
                                            media="(min-width: 1192px)"
                                        />
                                        <source
                                            srcSet="
      https://rukminim1.flixcart.com/fk-p-flap/910/130/image/a11d836fbdf82809.jpeg?q=80 1x,
      https://rukminim1.flixcart.com/fk-p-flap/1820/260/image/a11d836fbdf82809.jpeg?q=60 2x
    "
                                            media="(min-width: 768px) and (max-width: 1191px)"
                                        />
                                        <img
                                            src="https://rukminim1.flixcart.com/fk-p-flap/440/60/image/a11d836fbdf82809.jpeg?q=90"
                                            alt="Flipkart Banner"
                                            loading="lazy"
                                            fetchpriority="auto"
                                            className="w-full mx-auto block object-contain transition-all duration-500 ease-in-out opacity-100 aspect-[36/5]"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="max-w-[1200px] w-full flex m-auto flex-wrap flex-row !bg-white">
                        <div className="flex w-full flex-col ">
                            <div className="flex flex-col items-stretch relative text-white overflow-hidden h-[502.6px]">
                                <div className="w-[3750px] flex">
                                    <div className="w-[375px] rounded-[3px] ">
                                        <div className="flex flex-col basis-auto items-stretch relative">
                                            <div className="aspect-[3/4] w-full">
                                                <picture>
                                                    <source
                                                        srcSet="
      https://rukminim1.flixcart.com/image/1600/2130/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=80 1x,
      https://rukminim1.flixcart.com/image/3200/4260/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=60 2x
    "
                                                        media="(min-width: 1192px)"
                                                    />
                                                    <source
                                                        srcSet="
      https://rukminim1.flixcart.com/image/1000/1330/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=80 1x,
      https://rukminim1.flixcart.com/image/2000/2660/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=60 2x
    "
                                                        media="(min-width: 768px) and (max-width: 1191px)"
                                                    />
                                                    <img
                                                        src="https://rukminim1.flixcart.com/image/480/640/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=90"
                                                        alt="Product Image"
                                                        loading="eager"
                                                        fetchpriority="high"
                                                        className="w-full mx-auto block object-contain transition-all duration-500 ease-in-out opacity-100 aspect-[3/4]"
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex basis-auto flex-col items-end absolute top-4 right-4">
                                        <div className="flex basis-auto flex-col shrink-0 items-center relative rounded-[8px] overflow-hidden justify-center mb-3">
                                            <div className="flex items-center z-[2] rounded-[8px] bg-white h-8 w-8">
                                                <div className="transform translate-y-0 scale-100 flex items-stretch relative bg-white justify-center">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative left-1"><path d="M21.196 11.4057C21.3096 11.1653 22.4159 8.76955 21.1429 6.31952C21.0141 6.06366 19.7866 3.7842 17.271 3.49733C15.2327 3.26473 13.1489 4.46649 11.9896 6.56762C10.5727 4.2649 8.16313 3.11742 6.02635 3.62138C4.3139 4.03231 3.0485 5.43565 2.54083 6.84674C1.22239 10.483 4.73822 14.5612 6.06424 16.0964C8.0722 18.4224 10.3226 19.7559 11.9821 20.5312C12.467 20.3064 12.9898 20.0273 13.5278 19.6784C13.846 19.4768 14.134 19.2675 14.4068 19.0659" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.0938 12V19.3125" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4375 15.6562H21.75" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex basis-auto flex-col shrink-0 items-center relative rounded-[8px] overflow-hidden justify-center mb-3">
                                            <div className="flex items-center z-[2] rounded-[8px] bg-white h-8 w-8">
                                                <div className="transform translate-y-0 scale-100 flex items-stretch relative bg-white justify-center">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative left-1"><path d="M10.125 13.875L15 9" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9716 3.95434C21.0078 3.82605 21.0091 3.69044 20.9754 3.56147C20.9417 3.4325 20.8743 3.31484 20.78 3.22059C20.6858 3.12633 20.5681 3.0589 20.4392 3.02524C20.3102 2.99157 20.1746 2.99288 20.0463 3.02903L2.04629 8.48716C1.89934 8.52863 1.76854 8.61397 1.67139 8.73177C1.57424 8.84958 1.51536 8.99422 1.50262 9.14639C1.48988 9.29855 1.52388 9.45098 1.6001 9.58329C1.67631 9.71561 1.79109 9.82151 1.9291 9.88684L10.1257 13.875L14.1138 22.0706C14.1791 22.2086 14.285 22.3234 14.4173 22.3996C14.5497 22.4758 14.7021 22.5098 14.8542 22.4971C15.0064 22.4843 15.1511 22.4255 15.2689 22.3283C15.3867 22.2312 15.472 22.1004 15.5135 21.9534L20.9716 3.95434Z" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex basis-auto flex-col items-stretch absolute bottom-4 left-4">
                                        <div className="flex items-stretch relative rounded-[8px] overflow-hidden">
                                            <div className="flex items-center overflow-hidden p-2 bg-white rounded-[8px]">
                                                <div className="text-[#333333] items-center text-3 leading-4 mr-0.5">4.6</div>
                                                <svg width="14" height="14" viewBox="0 0 12 12"><path d="M5.99953 8.86357L8.56453 10.4409C8.63108 10.4813 8.70812 10.5011 8.7859 10.4977C8.86368 10.4943 8.93871 10.468 9.00152 10.422C9.06433 10.376 9.11209 10.3124 9.13877 10.2393C9.16545 10.1661 9.16985 10.0867 9.15141 10.0111L8.45391 7.06779L10.7367 5.09904C10.7949 5.04793 10.8369 4.9809 10.8574 4.90621C10.878 4.83153 10.8762 4.75247 10.8523 4.67878C10.8284 4.6051 10.7835 4.54002 10.7231 4.49159C10.6626 4.44315 10.5893 4.41347 10.5122 4.40622L7.51641 4.16247L6.36234 1.36872C6.33292 1.29665 6.2827 1.23497 6.21808 1.19155C6.15347 1.14813 6.07738 1.12495 5.99953 1.12495C5.92168 1.12495 5.8456 1.14813 5.78098 1.19155C5.71636 1.23497 5.66614 1.29665 5.63672 1.36872L4.48266 4.16247L1.48688 4.40622C1.40924 4.41304 1.33532 4.44259 1.27438 4.49117C1.21343 4.53975 1.16815 4.60521 1.1442 4.67938C1.12024 4.75355 1.11867 4.83313 1.13968 4.90818C1.1607 4.98324 1.20336 5.05043 1.26235 5.10138L3.54516 7.07013L2.84766 10.0111C2.82922 10.0867 2.83361 10.1661 2.86029 10.2393C2.88697 10.3124 2.93473 10.376 2.99754 10.422C3.06035 10.468 3.13539 10.4943 3.21317 10.4977C3.29095 10.5011 3.36798 10.4813 3.43453 10.4409L5.99953 8.86357Z" fill="#008b37ff"></path></svg>
                                                <div className="text-[#707070] ml-0.5 text-[12px] leading-[16px] ">
                                                    | 1.5L+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1280px] sticky bottom-0">
                        <div className=" bg-white w-full h-full">
                            <div className="flex flex-row basis-auto items-stretch relative rounded-t-[16px] p-2">
                                <div className="flex items-center border-[#e0e0e0] border-[1px] rounded-[12px] h-11 w-11 justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 18.375H7.35116C7.20479 18.375 7.06306 18.3236 6.95069 18.2298C6.83831 18.1361 6.76242 18.0058 6.73623 17.8618L4.65013 6.3882C4.62394 6.24419 4.54805 6.11394 4.43568 6.02016C4.3233 5.92637 4.18158 5.875 4.03521 5.875H2.625" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.625 21.5C8.48794 21.5 9.1875 20.8004 9.1875 19.9375C9.1875 19.0746 8.48794 18.375 7.625 18.375C6.76206 18.375 6.0625 19.0746 6.0625 19.9375C6.0625 20.8004 6.76206 21.5 7.625 21.5Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 21.5C17.8629 21.5 18.5625 20.8004 18.5625 19.9375C18.5625 19.0746 17.8629 18.375 17 18.375C16.1371 18.375 15.4375 19.0746 15.4375 19.9375C15.4375 20.8004 16.1371 21.5 17 21.5Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5249 8.99999C4.5249 8.66862 4.79353 8.39999 5.1249 8.39999H13.9999C14.3313 8.39999 14.5999 8.66862 14.5999 8.99999C14.5999 9.33136 14.3313 9.59999 13.9999 9.59999H5.1249C4.79353 9.59999 4.5249 9.33136 4.5249 8.99999ZM19.1149 11.4111C19.4402 11.4747 19.6523 11.7898 19.5888 12.115L18.9327 15.4735C18.8807 15.754 18.7323 16.0076 18.5132 16.1905C18.293 16.3743 18.0152 16.475 17.7283 16.475H6.3749C6.04353 16.475 5.7749 16.2064 5.7749 15.875C5.7749 15.5436 6.04353 15.275 6.3749 15.275H17.7283C17.7342 15.275 17.7398 15.2729 17.7443 15.2692C17.7488 15.2654 17.7518 15.2602 17.7529 15.2545L17.7543 15.2468L17.7543 15.2468L18.411 11.885C18.4746 11.5597 18.7897 11.3476 19.1149 11.4111Z" fill="#333333ff"></path><g clip-path="url(#AddToCart_a)"><path d="M15.25 7H20.75" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4.25V9.75" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="AddToCart_a"><rect width="8" height="8" fill="white" transform="translate(14 3)"></rect></clipPath></defs></svg>
                                </div>

                                <div className="flex flex-1 flex-row flex-nowrap items-stretch">
                                    <div className="flex basis-[50%] max-w-[50%]">
                                        <div className="ml-2 h-12 min-w-11 border-[1px] rounded-[12px] border-[#e0e0e0] flex flex-col items-center justify-center 
                    overflow-hidden px-[18px] relative">
                                            <div className="flex flex-col items-center justify-center relative">
                                                <div className="mr-0.5 text-[#333333] text-[16px] leading-[18px] font-bold">
                                                    Buy with EMI
                                                </div>
                                            </div>

                                            <div className="text-[#333333] text-[11px] leading-[14px] items-center inline whitespace-pre-wrap">
                                                From ₹2,423/m
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex basis-[50%] max-w-[50%] bg">
                                        <div className="ml-2 h-12 min-w-11 border-[1px] rounded-[12px] border-[#e0e0e0] flex items-center justify-center 
                    overflow-hidden px-[18px] relative bg-amber-300 flex-col">
                                            <div className="flex flex-col items-center justify-center relative">
                                                <div className="mr-0.5 text-[#333333] text-[16px] leading-[18px] font-bold"
                                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                                                    Buy now
                                                </div>
                                            </div>

                                            <div className="text-[#333333] text-[11px] leading-[14px] items-center inline whitespace-pre-wrap">
                                                From ₹2,423/m
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default MobileProductDetails

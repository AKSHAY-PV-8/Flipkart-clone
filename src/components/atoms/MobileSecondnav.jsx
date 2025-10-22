

const MobileSecondnav = () => {
    return (
        <div>
            <div className="[font-family: inter_regular, fallback-inter_regular, Arial, sans-serif] xl:hidden
        ">
                <div className="mb-1 flex xl:hidden pl-4 font-medium [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif] relative -top-[3px] text-[13px] leading-[18px] bg-white font-extrabold">
                    <div className="flex flex-row items-center relative p-1 ">
                        <svg
                            className="relative -left-[3px]"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{ backgroundColor: "rgba(0,0,0,0)" }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.08414 13.8688C10.5546 12.555 13 9.89704 13 6.75C13 5.42392 12.4732 4.15215 11.5355 3.21447C10.5979 2.27678 9.32608 1.75 8 1.75C6.67392 1.75 5.40215 2.27678 4.46447 3.21447C3.52678 4.15215 3 5.42392 3 6.75C3 9.89704 5.4454 12.555 6.91586 13.8688C7.38418 14.2872 7.61834 14.4964 8 14.4964C8.38166 14.4964 8.61582 14.2872 9.08414 13.8688ZM10.5 6.75C10.5 8.13071 9.38071 9.25 8 9.25C6.61929 9.25 5.5 8.13071 5.5 6.75C5.5 5.36929 6.61929 4.25 8 4.25C9.38071 4.25 10.5 5.36929 10.5 6.75Z"
                                fill="#1F1F1F"
                            />
                            <path
                                d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z"
                                fill="#1F1F1F"
                            />
                        </svg>
                        <div className="inline overflow-hidden">Location not set</div>
                    </div>

                    <div className="p-1 flex items-center">
                        <div className="text-[#1254E7] inline whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                            Select  delivery location
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 17 17"
                            fill="none"
                            style={{ backgroundColor: "rgba(0,0,0,0)" }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.627 3.749L11.627 8.749L6.627 13.749"
                                stroke="#1254E7"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sticky -top-[1px] z-100">
                    <div className="flex flex-col items-stretch relative justify-center">
                        <div className="p-4">
                            <div className="flex flex-row items-stretch relative -top-2" >
                                <div className="flex flex-col  border-[1.6px] border-[#58ABFA] border-solid relative flex-1 rounded-[12px] pr-1 pl-3 ">
                                    <div className="h-12 flex items-stretch relative flex-1 flex-row">
                                        <div className=" flex flex-row h-12 justify-center items-center">
                                            <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#1254E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path fill="none" stroke="#1254E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M175.4 175.4 224 224"></path></svg>

                                            <div className="flex flex-col items-stretch min-h-[30px] relative flex-1 overflow-hidden pl-2">
                                                <a href="" className="flex flex-col items-stretch relative flex-1 justify-center">
                                                    <div className="inline whitespace-pre-wrap break-words text-[#000000e0] text-[14px] leading-[20px] -tracking-[0.1px]">Search for Products</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MobileSecondnav

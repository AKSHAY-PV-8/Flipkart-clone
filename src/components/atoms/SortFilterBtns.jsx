import OptionButton from "./OptionButton"

const SortFilterBtns = () => {
    const Links = ["MOTOROLA mobiles", "opp Mobiles", "Gianee Mobiles", "Vivo Mobiles",
        "Smartphones Mobiles", "Collpad Mobiles", "Cellecor Mobiles",
        "Mobiles & Acceessories", "Lava Mobiles"]

    const options = [
        {
            img:"https://rukminim1.flixcart.com/www/64/64/promos/03/10/2025/fab7ebe1-ff85-4a7d-92d9-6219b369e69d.jpg?q=90",
            text:"Top Sale Discounts"
        },
        {
            img:"https://rukminim1.flixcart.com/www/64/64/promos/13/10/2022/9f35831d-1207-45a3-8bff-808c06d045d3.png?q=90",
            text:"5G"
        }
    ]

    return (
        <div className="xl:hidden">
            <div className="flex xl:hidden">
            <div className="flex-1 ">
                <div className="flex felx-row h-12 items-center justify-center relative">
                    <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                    <div className=" ml-2 text-[15px] -leading-[0.01px] flex-shrink-1 text-black">Sort</div>
                </div>
            </div>
            <div className="h-4 w-[1px] bg-[#d5d7db] relative top-3"></div>
            <div className="flex-1 ">
                <div className="flex felx-row h-12 items-center justify-center relative">
                    <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg>
                    <div className=" ml-2 text-[15px] -leading-[0.01px] flex-shrink-1 text-black">Filter</div>
                </div>
            </div>
        </div>

        <div className="min-h-[56px] h-[56px] flex justify-between items-center flex-row relative">
                    <div className="h-[56px] px-[11px] flex flex-row items-center w-[196px]">

                        {options.map(option => (
                            <div className="bg-white border-[#dbdbdb] pl-1 mt-2 h-10 flex justify-between pr-2 items-center flex-row mx-1">
                                <div className="flex items-center mr-[5px] rounded-[14px] w-8 h-8 justify-between">
                                <img
                                    src={option.img}
                                    alt="Promo"
                                    loading="lazy"
                                    fetchpriority="auto"
                                    height="32"
                                    width="32"
                                    className="w-full h-full m-auto object-contain transition-all duration-500 ease-in-out opacity-100"
                                    style={{ filter: "none" }}
                                />
                                </div>

                                <div className="max-w-full text-ellipsis overflow-hidden text-black text-[14px] break-words whitespace-pre-wrap "
                                style={{
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}>
                                {option.text}
                            </div>
                            </div>
                            ))}
                    </div>
                </div>

                <div className="p-[12px_5px_4px_0px] block text-[#878787] align-top xl:hidden overflow-hidden break-words whitespace-nowrap w-auto">
                    <div className="tracking-1.45 text-sm text-ellipsis">
                        {Links.map(link => (
                            <a href="" className="no-underline border-none leading-[1.45] text-sm
                   font-[Inter, -apple-system, Helvetica, Arial, sans-serif]">{link}</a>
                        ))}
                    </div>
                    <div className=" no-underline border-none leading-1.45 text-2 text-blue-600 tracking-[.01]
                            [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]">
                        Read More
                    </div>
                </div>


                <div className="justify-center items-center xl:hidden">
                    <div className="flex realtiveh-[167px]">
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-ads/750/334/dp-doc/1758525704418-cmfusstlu5bav0qajv4sc093q-5944fa3a07e217104f872e64a5464ab6b6394d69f6fce32c45761855649f0638.jpg?q=90"
                            alt=""
                            aria-busy="false"
                            data-highres-loaded="true"
                            loading="eager"
                            fetchpriority="auto"
                            height="167"
                            width="375"
                            className="w-full h-full object-cover transition-all duration-500 aspect-[auto, 357/157]"
                            style={{
                                filter: "none",
                                opacity: 1,
                                margin: "auto"
                            }}
                        />
                    </div>
                </div>
        </div>
    )
}

export default SortFilterBtns

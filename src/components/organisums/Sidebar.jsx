import Slider from "../molecules/Slider"
import FilterOptions from "../molecules/FilterOptions"
import { useFilter } from "../../hooks/FilterContext";



const Sidebar = () => {

    const {handleCheckedItem, selectedBrand} = useFilter();

    return (
        <aside className="!flex-[0_0_280px] max-w-[280px] !p-[0_10px_0_0] flex-col flex w-[16.66%]" >
            <div className="w-[100%]">

                <div className="block w-[100%] relative bg-[#fff]">

                    <section className="!pb-[12px] border-b-[1px_solid] !p-[16px]">
                        <div className="flex flex-row item-center justify-between">
                            <div className="text-[18px]">
                                <span className="font-medium leading-[0.3px]">Filters</span>
                            </div>
                            <div className="text-[18px] cursor-pointer text-[#2874f0] font-500 uppercase">
                                <span className="text-[12px]">Clear all</span>
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap relative -top-1 -left-1">
                            {selectedBrand.map((option, i) => (
                                <div className="relative max-h-[104px] overflow-hidden" key={i}>
                                    <div className="!mt-2 -mb-1">
                                        <div className="text-[12px] bg-[#e0e0e0] rounded-[3px]  mx-0.5 my-1 overflow-hidden max-w-[200px] !p-2 inline-block cursor-pointer"
                                            onClick={() => handleCheckedItem(option, false)}>
                                            <span className="text-xs">✕</span>
                                            <span className="whitespace-nowrap text-ellipsis overflow-hidden !ml-2 max-w-[90%] ">{option}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                    <div className="!p-4 border-b-[1px_solid_#f0f0f0]">
                        <div className="categories__wrapper relative -top-0.5">
                            <div className="text-xs font-medium uppercase text-black !mb-[5px] relative -top-[0.5px]">
                                <span>CATEGORIES</span>
                            </div>
                            <div className="text-sm !py-[5px] whitespace-nowrap">
                                <span className="!text-black"><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="inline-block !mr-[5px]"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" className="P3pAQJ"></path></svg></span>
                                <a href="" className="text-[#878787] w-[150px] overflow-hidden ">
                                    Mobiles & Accessories
                                </a>
                            </div>
                            <div className="text-sm !py-[5px] whitespace-nowrap">
                                <span className=""><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="inline-block !mr-[5px] relative "><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className=""></path></svg></span>
                                <a href="" className=" w-[150px] overflow-hidden ">
                                    Mobiles
                                </a>
                            </div>
                        </div>
                    </div>

                    <FilterOptions />
                    <Slider />
                    <div className="block w-full ">
                        <a href=""></a>
                    </div>


                </div>



            </div>

        </aside>
    )
}

export default Sidebar

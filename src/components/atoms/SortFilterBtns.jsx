import OptionButton from "./OptionButton"

const SortFilterBtns = () => {
    return (
        <div className="flex xl:hidden">
            <div className="flex-1 ">
                <div className="flex felx-row h-12 items-center justify-center relative">
                    <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                    <div className=" ml-2 text-[20px] -leading-[0.01px] flex-shrink-1 text-black">Sort</div>
                </div>
            </div>
            <div className="h-4 w-[1px] bg-[#d5d7db] relative top-3"></div>
            <div className="flex-1 ">
                <div className="flex felx-row h-12 items-center justify-center relative">
                    <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg>
                    <div className=" ml-2 text-[20px] -leading-[0.01px] flex-shrink-1 text-black">Filter</div>
                </div>
            </div>
        </div>
    )
}

export default SortFilterBtns

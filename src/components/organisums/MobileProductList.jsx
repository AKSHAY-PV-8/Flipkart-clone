import HomeNavbar from "./HomeNavbar"
import SortFilterBtns from "../atoms/SortFilterBtns"
import MobileProductCards from '../molecules/MobileProductCards'

const MobileProductList = () => {
    const icon3 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
    
   
    return (
        <div>
            <HomeNavbar style={"xl:hidden overflow-hidden"} icon2={icon3} text3={true} label2={"login"} homePage={false} />

            <SortFilterBtns />

            <div className="w-[346px] flex items-stretch flex-col xl:hidden ">
                <MobileProductCards/>
            </div>

        </div>
    )
}

export default MobileProductList

import MobileProductDetails from "../components/molecules/MobileProductDetails"
import NavBar from "../components/organisums/NavBar"
import Productdetails from "../components/organisums/Productdetails"
import ToggleItemNavbar from "../components/organisums/ToggleItemNavbar"


const ProductDetails = () => {

  return (

    <div className="">
      <MobileProductDetails/>
      
      <div className="hidden xl:block">
        <NavBar />
        <ToggleItemNavbar />
        <Productdetails />
      </div>

    </div>
  )
}

export default ProductDetails

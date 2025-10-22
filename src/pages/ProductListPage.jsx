import CardList from "../components/organisums/CardList"
import NavBar from "../components/organisums/NavBar"
import Sidebar from "../components/organisums/Sidebar"
import ToggleItemNavbar from "../components/organisums/ToggleItemNavbar"
import { FilterProvider, useFilter } from "../hooks/FilterContext"




const ProductListComponent = () => {
  const { filteredProduct } = useFilter()

  

  return (
    <div>
      <NavBar />
      

      <ToggleItemNavbar />

      <section className="mx-auto min-w-[978px] max-w-[1680px] !p-2 w-[100%] relative bg-[#f1f3f6] ">
        <div className="flex flex-row justify-start flex-shrink-1 relative items-start ">
          <Sidebar />
          <CardList products={filteredProduct} />
        </div>
      </section>
      
    </div>
  )
}

const ProductListPage = () => {

  return (
    <FilterProvider>
      <ProductListComponent />
    </FilterProvider>
  )

}

export default ProductListPage

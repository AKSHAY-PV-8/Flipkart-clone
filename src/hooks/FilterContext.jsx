import { createContext, useContext, useMemo, useState } from "react";
import { productData } from "../data/ProductData";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

    const [selectedBrand, setSelectedBrand] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 })

    const handleCheckedItem = (brand, checked) => {
        setSelectedBrand(prev =>
            checked ? [...prev, brand] : prev.filter(b => b !== brand)
        )
    }

    const handlePrice = (min, max) => {
        setPriceRange({ min, max })
    }
   

    console.log(selectedBrand)

    const filteredProduct = useMemo(() => {
        
        return productData.filter((p) => {
            
            const price = parseInt(p.price.replace(/,/g, ""));
            const inPriceRange = price >= priceRange.min && price <= priceRange.max;
            const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(p.brand);
            return inPriceRange && matchesBrand;
        });
    }, [priceRange, selectedBrand]);

    const value = {
        handleCheckedItem,
        handlePrice,
        filteredProduct,
        selectedBrand
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilter = () => useContext(FilterContext)
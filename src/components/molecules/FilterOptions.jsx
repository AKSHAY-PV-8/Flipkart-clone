import { useState } from "react"
import { useFilter } from "../../hooks/FilterContext"
import Chechbox from "../atoms/Chechbox"
import Filters from "../atoms/filters"
import Search from "../atoms/Search"

const FilterOptions = () => {

    const { handleCheckedItem, selectedBrand } = useFilter();
    const [toggleButton, setToggleButton] = useState({});

    const handleClick = (headName) => {
        setToggleButton(prev => ({
            ...prev,
            [headName]: !prev[headName]
        }))
        console.log(toggleButton)
    }

    const data = [
        {
            title: "Brand",
            search: true,
            options: ['Apple', 'Samsung', 'Google']
        },
        {
            title: "RAM",
            options: ["1GB and Below"]
        },
        {
            title: "NETWORK TYPE",
            options: ["2G", "3GB", "4GB", "4GB VOLTE", "5GB"]
        },
        {
            title: "RAM",
            options: ["1GB and Below"]
        },
        {
            title: "INTERNAL STORAGE",
            options: ["256 GB & Above", "128 - 255.9 GB", "64 - 127.9 GB", "32 - 63.9 GB", "16 - 31.9 GB", "8 - 15.9 GB"]
        },
        {
            title: "CLOCK SPEED",
            options: ["1.5 - 1.9 GHz", "Below 1.5 GHz"]
        },
        {
            title: "DISCOUNT",
            options: ["50% or more", "40% or more", "30% or more", "20% or more", "10% 0r more"]
        }
        
    ]

    return (
        <div >
            {data.map(option => (
                <div key={option.title} className="!p-4 border-b-[1px_solid_#f0f0f0] relative">

                    <Filters filter={option.title} onClickStatus={handleClick} />

                    {toggleButton[option.title] && (
                        <div className="filter-checkbox">
                            {option.search ? <Search /> : ""}
                            <div className="filter-chechbox__wrapper relative top-3" id={option.title}>
                                {option.options.map(chechbox => (
                                    <Chechbox checkedBox={chechbox} onChangeHandler={(e) => handleCheckedItem(e.target.value, e.target.checked)} checked={selectedBrand.includes(chechbox)} />
                                ))}
                                {console.log(selectedBrand)}

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default FilterOptions

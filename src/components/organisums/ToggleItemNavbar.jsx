import "../../styles/ToggleItemNavbar.css"

let items = [
    {
        name: "Electronics",
        toggle: true
    },
    {
        name: "TVs & Appliances",
        toggle: true
    },
    {
        name: "Men",
        toggle: true
    },
    {
        name: "Women",
        toggle: true
    },
    {
        name: "Baby & Kids",
        toggle: true
    },
    {
        name: "Home & Furniture",
        toggle: true
    },
    {
        name: "Sports, Books & More",
        toggle: true
    },
    {
        name: "Fights",
        toggle: false
    },
    {
        name: "Offer Zone",
        toggle: false
    },
]

const ToggleItemNavbar = () => {
  return (
    <div className="toggle-items-navbar__section hidden xl:block">
        <div className="toggle-item-navbar__base">
            <div className="toggle-item-navbar__wrapper">
                {items.map(item => (
                    <span className="toggle-item">
                        {item.name}
                        {item.toggle ? 
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="">
                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" className="CPYntE"></path>
                        </svg> : ""}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ToggleItemNavbar

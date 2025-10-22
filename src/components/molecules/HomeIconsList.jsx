import Items from "../atoms/Items"

const HomeIconsList = ({ style }) => {

  const items = [
    { name: "Minutes", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100", index: 1 },
    { name: "Mobiles & Tables", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100", index: 2 },
    { name: "TV & Applinces", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100", index: 3 },
    { name: "Electronics", itemIcon: "	https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100", index: 4 },
    { name: "Fashion", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100", index: 5 },
    { name: "Home & Kitchen", itemIcon: "	https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100", index: 6 },
    { name: "Beauty & toys", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100", index: 7 },
    { name: "Furniture", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100", index: 8 },
    { name: "Flight Bookings", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100", index: 9 },
    { name: "Grocery", itemIcon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100", index: 10 }
  ]
  return (

    <div className={style}>
      <div className="h-[calc(100% - 16px)] bg-[#f8f8f8]  mt-0 z-10">
        <div className="mb-4 flex flex-col relative no-underline z-0 bg-white">
          <div className="w-full h-full">
            <div className="bg-[#fff] min-h-[126px]
                        overflow-x-scroll no-scrollbar
                        justify-normal relative
                        flex flex-row w-full z-10000 text-black
                        lg:!justify-center
                        [scrollbar-width:0] [::-webkit-scrollbar]:hidden
                        "

              style={{
                fontFamily: "inter_regular, fallback-inter_regular, Arial, sans-serif"
              }}>
              {items.map(item => (
                <Items name={item.name} icons={item.itemIcon} index={item.index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeIconsList

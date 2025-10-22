import { useEffect, useState } from "react"
import ProductCard from "../../components/molecules/ProductCard"

const sortList = [

  {name:"Popularity", value:"popular"},
  {name:"Price -- Low to High", value:"low-high" },
  {name:"Price -- High to Low", value:"high-low"},
  {name:"Newest First", value:"new"}

]


const CardList = ({products}) => {

  const [sortedArray, setsortedArray] = useState(products)

  useEffect(() => {
    setsortedArray(products);
  },[products])

  const clean = (price) => parseInt(price.replace(/,/g, ""), 10);

  const handleSort = (sort) => {

    let array = [...sortedArray]
  
    switch(sort){
      case "popular":
        array.sort((a,b) => b.stars - a.stars)
        setsortedArray(array)
        break;
      
      case "low-high":
        array.sort((a,b) => clean(a.price) - clean(b.price))
        setsortedArray(array)
        break;
      
      case "high-low":
        array.sort((a,b) => clean(b.price) - clean(a.price))
        setsortedArray(array)
        break;
      
      case "new":
        console.log("new")
        break;
      
      default:"invalid"
    }
  }

  const Links = ["MOTOROLA mobiles", "opp Mobiles", "Gianee Mobiles", "Vivo Mobiles", 
                "Smartphones Mobiles", "Collpad Mobiles", "Cellecor Mobiles", 
                "Mobiles & Acceessories", "Lava Mobiles"]

  return (
    <>
    <section className="flex-grow-1 overflow-auto flex flex-col m-0 p-0 w-full">
      <div className="bg-[#ffffff] flex flex-row w-full ">
        <div className="flex-grow-1 overflow-auto block">
            <div className="bg-[#ffffff] !pt-3 !px-4 h-full min-h-[72px]">
                <div className="">
                    <div className="text-[12px] text-[#878787] inline-block">
                        <a href="" className="max-w-20 whitespace-nowrap overflow-ellipsis">Home</a>
                        <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="h-[7px] w-5 rotate-180 align-middle inline-block"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                    </div>
                    <div className="text-[12px] text-[#878787] inline-block font-elip">
                        <a href="" className="max-w-20 whitespace-nowrap overflow-ellipsis">Mobiles & Accessories</a>
                        <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="h-[7px] w-5 rotate-180 align-middle inline-block"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                    </div>
                    <div className="text-[12px] text-[#878787] inline-block">
                        <a href="" className="max-w-20 whitespace-nowrap overflow-ellipsis">Mobiles</a>
                        <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="h-[7px] w-5 rotate-180 align-middle inline-block"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                    </div>
                </div>

                <div className="!p-[12px_5px_4px_0px] block text-[#878787] align-top w-full">
                    <div className="tracking-1.45 text-2">
                        {Links.map(link => (
                          <a href="" className="text-[#2874f0] no-underline border-none leading-1.45 text-2 
                            [font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]">{link}</a>
                        ))}
                    </div>
                </div>
                                           
                <h1 className="font-medium text-[16px] !mt-2 inline-block">Mobiles</h1>
                <span className="inline-block !ml-[10px] text-[#878787] text-[12px] ">(Showing 1- 24 products of 601 products)</span>
                <div className="flex">
                    <div className="inline-block font-medium !p-[8px_10px_4px_0px]" onCl>Sort By</div>
                    {sortList.map(sort => (
                      <div className="!p-[8px_0px_4px] !mx-[10px] cursor-pointer inline-block" onClick={() =>handleSort(sort.value)}>{sort.name}</div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {sortedArray.map((product, index) => (
        <div className="" key={index}>
          <ProductCard 
          name={product.name} 
          id={product.id} 
          img={product.img}
          stars={product.stars}
          details={product.details}
          rating={product.rating}
          review={product.review}
          price={product.price}
          exchangeOffer={product.exchangeOffer} />
        </div>
      ))}
      
    </section>
    </>
    
  )
}

export default CardList

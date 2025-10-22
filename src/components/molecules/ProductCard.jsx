import {useNavigate} from "react-router-dom"
import icon from "../../assets/img/fa_9e47c1.png"


const ProductCard = (props) => {

    const {
        name, 
        id, 
        img, 
        stars, 
        rating,
        details,
        price,
        exchangeOffer,
        review
            } = props
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/productDetail/${id}`);
    }
      
    return (
        <section className="bg-[#ffffff] w-full items-stretch flex" onClick={handleNavigate} key={id}>
        <div className="tracking-1 !p-[24px_0px_30px_24px] block relative border-b-[1px_solid_#f0f0f0] w-full">
            <a href="" className="flex relative no-underline border-none">
                <div className="relative w-[200px] ">
                    <div className="relative block h-[200px] w-[200px] !mx-auto">
                        <img src={img} alt="" className="absolute !m-auto max-w-full max-h-full"/>
                    </div>
                    <div className="block !mt-4 ">
                        <div className="align-middle">
                            <span className="inline-block">
                                <label htmlFor="" className="cursor-pointer w-full relative block">
                                    <input type="text" className="relative w-[14px] h-[14] border-[1.4px_solid_#c2c2c2] rounded-[1.5px] inline-block align-middle"/>
                                </label>
                            </span>
                            <label htmlFor="" className="align-middle ml-[8px] text-[14px] text-[#212121]">
                                <span className="">Add to Compare</span>
                            </label>
                        </div>
                    </div>
                    <div className="absolute inline-block top-0.5 -right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" className="" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                    </div>
                </div>

                <div className="pl-[25px] w-[calc(100%-200px)] flex flex-row flex-wrap ">
                    <div className="w-[58.33%] inline-block align-top">
                        <div className="font-medium text-[18px] block cursor-pointer">
                           {name}
                        </div>
                        <div className="mt-[6px] ">
                            <span className="relative">
                                <div className="tracking-normal inline-block py-0.5 pr-1 pl-1.5 rounded-[3px] font-medium align-middle text-[white] text-[12px] bg-[#388e3c]">
                                    {stars}
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="inline-block relative -top-[2px]"></img>
                                </div>
                            </span>
                            <span className="pl-8px font-medium text-[#878787] whitespace-nowrap inline-block">
                                <span>{rating} Ratings & {review} Reviews</span>
                            </span>
                        </div>
                        <div className="mt-[13px]">
                            <ul className="mt-[5px] text-black table">
                                {details.map(d => (
                                    <li className="table-row ">.{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pl-[25px] w-[41.66%] inline-block align-top">
                        <div className="inline-block -mt-[1px] pr-2.5">
                            <div className="text-[25px] block font-medium">₹{price}</div>
                        </div>
                        <div className="inline-block align-top pb-1">
                            <img height="21" src={icon} className="h-[21px]"></img>
                        </div>
                        <br></br>
                        <div className="mt-[5px] inline-block">
                            <div className="text-black font-normal align-middle inline-grid whitespace-pre">Upto</div>
                        </div>
                        <span className="mt-[5px] inline-block">
                            <div className="text-black font-bold align-middle inline-grid whitespace-pre"> ₹{exchangeOffer}</div>
                        </span>
                        <div className="mt-[5px] inline-block">
                            <div className="text-black font-normal align-middle inline-grid whitespace-pre"> Off on Exchange</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        </section>
    )
}

export default ProductCard

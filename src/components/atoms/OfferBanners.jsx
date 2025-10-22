import { BanerData } from "../../data/OffersBanner-data.js"


const OfferBanners = () => {

  return (
    <div className="mb-4 hidden xl:block">
        {BanerData.map(row => (
            <div className="flex flex-row gap-2 p-2 mx-4">
                {
                    row.map(banner => (
                    <div className="max-w-[33.33333%] " key={banner.id}>
                    <picture>
                        <source srcSet={banner.srcSet1} media="(min-width: 1192px)"/>
                        <source srcSet={banner.srcSet2} media="(min-width: 768px) and (max-width: 1191px)"/>
                        <img src={banner.img} alt="Image" className="" 
                            style={{filter: "none", opacity: 1, transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out", width: "100%", margin: "auto", display: "block", objectFit: "cover", aspectRatio: "41 / 22"}}
                            aria-busy="false" data-highres-loaded="true" loading="eager" fetchpriority="auto" 
                            srcSet={banner.imgSrcSet}/>
                        </picture>
                    </div>
                ))
                }
            </div>
        ))}
    </div>
    
  )
}

export default OfferBanners

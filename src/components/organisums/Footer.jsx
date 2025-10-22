import { FooterData, SubFooterData } from "../../data/Footer-data.js"
import img from "../../assets/img/payment-method-c454fb.svg"

FooterData

const Footer = () => {

  return (
    <footer className="bg-black hidden xl:block">
        <div className="flex flex-row gap-5 pt-10 px-[60px] justify-between">
            {FooterData.map(col => 
                col.map(dataCol => (
                    <div key={dataCol.id}>
                        <div className="text-[#878787] text-[12px] mb-3">{dataCol.head}
                        </div>
                        {dataCol.data.map((text,index) => (
                            <a href="" 
                                className="text-[12px] text-[#fff] block leading-[18px] no-underline" 
                                key={index}>
                                {text}
                            </a>
                        ))}
                        {dataCol.social ? 
                            <div>
                                <div className="text-[#878787] text-[12px] mb-3">Social:</div>
                                <div className="flex flex-row">
                                    {dataCol.social.map((icon, i) => (
                                        <a href="" key={i} className="w-5 h-5 mr-4">
                                            <img src={icon} alt="" />
                                        </a>
                                    ))}
                                    
                                </div>
                            </div>
                            : ""}

                        {dataCol.link? <p className="text-blue-500">{dataCol.link}</p>: ""}
                    </div>
                ))
            )}

        </div>

        <div className="flex py-[25px] mt-10 justify-evenly text-center">
            {SubFooterData.map(data => (
                <div className="" key={data.id}>
                    <div className="border-t-[1px_solid_#454d5e] flex justify-evenly items-center">
                    <div className="flex items-center">
                        <img src={data.icon} alt=""  className="w-[13px] h-[13px]"/>
                        <a href="" className="text-white">
                            <span>{data.iconText}</span>
                        </a>
                    </div>
                </div>
                </div>
            ))}
            <span className="text-white flex justify-center items-center">© 2007-2025 <span>Flipkart.com</span></span>
            <img src={img} alt="Payment methods"></img>
        </div>
        
    </footer>
  )
}

export default Footer

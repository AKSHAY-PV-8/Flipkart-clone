import { mostSearched } from "../../data/MostSearch-data"

const BrandDiectory = () => {

  
  return (
    <div className="mt-[25px] border-t border-black p-[25px] mx-auto text-left">
        <div className="text-[#565656] mt-[14px] py-[14px] font-[600] text-[18px]">
            Top Stories :
            <a className="ml-1" href="" title="Brand Directory">
                Brand Directory
            </a>
        </div>

        {mostSearched.map((section, index) => (
          <div className="my-2 leading-[1.5]" key={index}>
            <span className="text-[#565656] uppercase mr-1 text-[14px]">{section.title}</span>
            {section.links.map((link, i) => (
              <a href="" key={i} 
              className="text-[#565656] px-[5px] border-r border-[#333] text-[12px]">{link.name}</a>
            ))}
          </div>
        ))}
        
      
    </div>
  )
}

export default BrandDiectory

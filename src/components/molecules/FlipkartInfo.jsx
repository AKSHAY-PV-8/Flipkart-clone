import { flipkartInfo } from "../../data/FlipkartInfo";


const FlipkartInfo = () => {

  const {title, intro, sections} = flipkartInfo;


  return (
    <div className="p-[30px] text-[#878787] bg-[#f5f5f5] text-[12px] leading-[16px]">
        <h1 className="text-[16px] mb-[10px]">{title}</h1>
        {intro}
        {sections.map((sections, index) => (
            <div className="" key={index}>
                <h2 className="text-[16px] mb-[10px]">{sections.heading}</h2>
                {sections.content}
            </div>
        ))}
    </div>
  )
}

export default FlipkartInfo

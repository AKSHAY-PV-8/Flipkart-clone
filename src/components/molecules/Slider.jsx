import { useEffect, useRef, useState } from "react"
import { useFilter } from "../../hooks/FilterContext";

const Slider = () => {
  const [minValue, setMinValue] = useState(20000);
  const [maxValue, setMaxValue] = useState(200000);
  const {handlePrice} = useFilter()

  let min = 0;
  let max = 200000;

  const rangeRef = useRef(null);

  useEffect(() => {
    if (rangeRef.current) {
      const percent1 = ((minValue - min) / (max - min)) * 100;
      const percent2 = ((maxValue - min) / (max - min)) * 100;
      console.log(minValue)
      console.log(maxValue)

      rangeRef.current.style.left = `${percent1}%`;
      rangeRef.current.style.width = `${percent2 - percent1}%`;

      handlePrice(minValue, maxValue)
      
    }
  }, [minValue, maxValue]);
  
 

  return (
    <div>
    <div className="!p-4 border-b-[1px_solid_rgb(240, 240, 240)]">
        <div className="flex justify-between items-center">
            <div className="text-[13px] font-medium uppercase tracking-[0.3px] inline">
                <span>Price</span>
            </div>
        </div>

        <div className="h-[25px] m-0 p-0 ">
            <div className="h-[100%] relative -bottom-6px">
                <div className="h-[6.25px] w-[78.9367px] inline-block bg-[#e0e0e0] "></div>
                <div className="h-[12.5px] w-[78.9367px] inline-block bg-[#e0e0e0] "></div>
                <div className="h-[25px] w-[78.9367px] inline-block bg-[#e0e0e0] "></div>
            </div>
        </div>

        <div className="m-0 p-0">
            <div className="relative w-full">

        <div className="absolute top-1/2 h-[6px] w-full bg-gray-300 rounded-full -translate-y-1/2"></div>

        <div
          ref={rangeRef}
          className="absolute  h-[6px] bg-blue-500 rounded-full -translate-y-1/2"
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - 10000);
            setMinValue(val);
          }}
          className="absolute w-full appearance-none bg-transparent pointer-events-none 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-1
          [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:-top-2"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + 10000);
            setMaxValue(val);

          }}
          className="absolute w-full appearance-none bg-transparent pointer-events-none 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:border-1
          [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:-top-2"
        />
      </div>
    </div>
            
            <div className="-mt-3 ">
                <div className="w-[47.362px] inline-block text-left text-[#c2c2c2] text-[20px]">.</div>
                <div className="w-[47.362px] inline-block text-left text-[#c2c2c2] text-[20px]">.</div>
                <div className="w-[47.362px] inline-block text-left text-[#c2c2c2] text-[20px]">.</div>
                <div className="w-[47.362px] inline-block text-left text-[#c2c2c2] text-[20px]">.</div>
                <div className="w-[47.362px] inline-block text-left text-[#c2c2c2] text-[20px]">.</div>
            </div>  
        </div>
        
        <div className="text-[#a3a3a3] text-[14px] mt-[5px] -mx-1 flex items-center justify-stretch">
            <div className="inline-block flex-grow-2">
                <select name="" id="" className="w-full border border-[rgb(224,224,224)] rounded-[1px] appearance-none 
                    bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] 
                    bg-[90%_50%] bg-no-repeat bg-white 
                    h-[24px] text-[14px] text-[rgb(33,33,33)] leading-[1] px-[5px] outline-none">
                    <option value="Min" className="!px-[7px]">{minValue }</option>
                    <option value="Min" className="!px-[7px]">Min</option>
                    <option value="Min" className="!px-[7px]">Min</option>
                    <option value="Min" className="!px-[7px]">Min</option>
                    <option value="Min" className="!px-[7px]">Min</option>
                </select>
            </div>
                <div className="inline-block mx-[9px] text-[14px] text-[#878787] tracking-1 flex-[1_1_0%] text-center">to</div>
                <div className="inline-block ml-[1.5px] flex-grow-2">
                    <select name="" id="" className="w-full border border-[rgb(224,224,224)] rounded-[1px] appearance-none 
                        bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] 
                        bg-[90%_50%] bg-no-repeat bg-white 
                        h-[24px] text-[14px] text-[rgb(33,33,33)] leading-[1] px-[5px] outline-none">
                        <option value="Min" className="!px-[7px]">{maxValue || "30000+"}</option>
                        <option value="Min" className="!px-[7px]">₹10000</option>
                        <option value="Min" className="!px-[7px]">₹10000</option>
                        <option value="Min" className="!px-[7px]">₹10000</option>
                        <option value="Min" className="!px-[7px]">₹10000</option>
                    </select>
                </div>
        </div>
    </div>
  )
}

export default Slider

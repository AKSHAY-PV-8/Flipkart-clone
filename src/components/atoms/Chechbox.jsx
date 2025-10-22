
const Chechbox = ({checkedBox, onChangeHandler, checked}) => {
  return (
    <div className="!py-[3px] cursor-pointer w-[100%] inline-block">
      <label className="!py-[3px] cursor-pointer w-[100%] relative block text-sm font-normal text-black tracking-[1.4]">
        <input type="checkbox" className="bg-[#2874f0] border-[#2874f0] absolute w-[14px] h-[14px] rounded-[1.5px] inline-block align-middle cursor-pointer"
        value={checkedBox}
        onChange={onChangeHandler}
        checked={checked}
        />
        {/* <div className="bg-[#2874f0] border-[#2874f0] relative w-[14px] h-[14px] rounded-[1.5px] inline-block align-middle cursor-pointer"></div> */}
        <span className="align-middle text-sm !pl-[11px] text-black  inline-block w-[97%] 
                        whitespace-nowrap overflow-hidden tracking-[1] 
                        cursor-pointer relative left-3.5 -top-0.5">
          {checkedBox}
        </span>
      </label>
    </div>
  )
}

export default Chechbox



const OptionButton = () => {
  return (
    <div className="flex-1 ">
      <div className="flex felx-row h-12 items-center justify-center relative">
        <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
        <div className=" ml-2 text-[20px] -leading-[0.01px] flex-shrink-1 text-black">Sort</div>
      </div>
    </div>
  )
}

export default OptionButton

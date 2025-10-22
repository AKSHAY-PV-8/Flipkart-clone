
const Filters = ({filter, onClickStatus}) => {

  return (
    <div className="flex justify-between items-center cursor-pointer !-m-4 !p-4" onClick={() => onClickStatus(filter)}>
        <div className="text-[13px] font-medium uppercase tracking-[0.3px] inline-block relative -top-[2.5px]">{filter}</div>
        <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="inline cursor-pointer w-1.5 h-[11px] -rotate-90"
        ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" className="SV+H35"></path></svg>
    </div>
  )
}

export default Filters
      


function Search() {
  return (
    <div>
        <div className="align-bottom cursor-pointer !m-0 relative top-2">
            <div className="inline-block h-[14px] w-[14px] bg-[#e6f4e8] py-[1px] text-[10px] text-center text-[#9e9e9e] relative -top-[1px]">
                <span className="relative -top-0.5">✕</span>
            </div>
            <div className="inline-block text-[14px] text-[rgb(135, 135, 135)] !ml-[11px]">
                <span className="text-[#9e9e9e]">Clear all</span>
            </div>
        </div>

        <div className="m-0 p-0 !mb-[7px] block relative top-3">
            <svg width="20" height="20" viewBox="0 0 17 18" className="w-3 h-5 absolute inline-block" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(135, 135, 135)" fill-rule="evenodd">
                <path class="JVQyl9" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                <path class="JVQyl9" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g>
            </svg>
            <input type="text" className="w-[100%] border-b-1 inline-block border-[#9e9e9e] 
                                        h-20px text-[14px]  relative left-5 -top-0.5" 
                                        placeholder="Search Brand"/>
            
        </div>
      
    </div>
  )
}

export default Search

import { useNavigate } from "react-router-dom"


const Items = (props) => {

  const navigate = useNavigate()

  const handelNavigate = () => {
    navigate("/productList")
    console.log("clicked")
  }

  return (
    props.index === 1 || props.inddex === 10 ?
      <a href="" className="!pl-6 pt-3 pr-3 pb-2 cursor-pointer no-underline 
                          relative box-content min-w-[90px] 
                          md:p-4" onClick={handelNavigate}>
        <div className="" >
          <div className="text-center">
            <div className="mb-3 lg:!mb-4 relative
                            m-auto flex items-center justify-center">
              <div className="w-16 h-16" >
                <img className="absolute m-w-full m-h-full" alt="Minutes" src={props.icons}></img>
              </div>
            </div>

            <span className="text-[12px] leading-[16px] flex items-center justify-center 
                              whitespace-normal [font-family: inter_regular, fallback-inter_regular, Arial, sans-serif]
                              md:![font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif]
                              md:!text-[14px] ">
              <span className="whitespace-normal">{props.name}</span>
            </span>
          </div>
        </div>
      </a> :
      <a className="px-3 pt-3 pb-2 !min-w-[90px]  cursor-pointer no-underline 
                  relative box-content md:p-4" onClick={handelNavigate}>
        <div className="w-[109.600px]" >
          <div className="text-center">
            <div className="mb-3 lg:!mb-4 relative
                            m-auto flex items-center justify-center">
              <div className="w-16 h-16" >
                <img className="absolute max-w-full max-h-full" alt="Minutes" src={props.icons}></img>
              </div>
            </div>

            <span className="text-[12px] leading-[16px] flex items-center justify-center 
                              whitespace-normal [font-family: inter_regular, fallback-inter_regular, Arial, sans-serif]
                              md:![font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif]
                              md:!text-[14px] ">
              <span className="whitespace-normal text-[16px] font-light xl:max-w-">{props.name}</span>
            </span>
          </div>
        </div>
      </a>
  )
}

export default Items

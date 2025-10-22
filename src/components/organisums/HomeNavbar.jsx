const HomeNavbar = ({ style, icon, icon1, icon2, icon3, label2, label3, homePage }) => {
  return (
    <section className={style}>
      <div className="bg-white flex justify-center items-center flex-col w-full ">
        <header className="flex items-center w-full sticky top-0 justify-between z-10 px-4 py-2 lg:py-3 lg:px-7 md:p-2 h-[52px]">

          <div className="flex items-center flex-grow">

            <a href="#" className="block mr-3 no-underline z-30 tracking-normal w-[42px] relative">
              {icon ? (
                <div className="relative -top-1">
                  <img
                    alt="Menu"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    width="24"
                    height="24"
                  />
                </div>
              ) : (
                <div className="relative -left-1">
                  <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                  </svg>
                </div>
              )}
            </a>

            <div className="mr-0 pt-1 max-w-[120px] sm:mr-9">
              {homePage ? (
                <a href="#" className="no-underline">
                  <picture title="Flipkart">
                    <source srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" media="(min-width:767px)" />
                    <source srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg" media="(max-width:766px)" />
                    <img
                      width="160"
                      height="40"
                      alt="Flipkart"
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                      className="aspect-[auto, 4/1] relative -top-1.5"
                    />
                  </picture>
                </a>
              ) : (
                <div className="flex flex-row w-auto relative -left-6.5">
                  <a href="#" className="w-[30px] h-[28px] overflow-hidden leading-[10px] max-w-[111px] pt-0.5 relative -left-[1px]">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" className="w-![50px] " />
                  </a>
                  <div className="text-black table-cell align-middle w-full whitespace-nowrap  pl-3">
                    <h1 className="text-[16px]">Mobiles</h1>
                  </div>
                </div>
              )}
            </div>


          </div>

          <div className="flex items-center font-inter relative left-1 -top-[2.8px]">
            <div className="flex items-center cursor-pointer md:hidden">
              <div className="relative flex items-center p-2">
                <a href="#" className="flex items-center text-[16px] leading-[24px] no-underline text-center relative ">
                  {icon1 ? (
                    <img src={icon1} width="24" height="24" className="w-6 h-6"/>
                  ) : (
                    <svg height="30" viewBox="0 0 32 32" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative left-4">
                      <path d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M19.9524 19.95L24.0024 24" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  )}
                </a>
              </div>
            </div>

            <div className="flex items-center px-0 cursor-pointer md:px-5">
              <div className="hidden md:block">
                <div className="relative flex items-center p-2">
                  <a href="#" className="flex items-center text-[16px] leading-[24px] no-underline text-center">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" className="mr-2" width="24" height="24" />
                    <span className="text-[16px] leading-[24px] font-extralight tracking-[1px]">Account</span>
                  </a>
                </div>
              </div>
              <a href="#" className="no-underline flex items-center text-center md:hidden">
                {icon2 ? <img src={icon2} width="24" height="24" /> : ""}
                {label2 && <div className="ml-1">{label2}</div>}
              </a>
            </div>

            <div className="flex items-center px-0 cursor-pointer md:px-5">
              <div className="relative flex items-center p-2">
                <a href="#" className="flex items-center text-[16px] leading-[24px] no-underline text-center">
                  {icon ? <img src={icon3} className="mr-2 w-6 h-6" width="24" height="24" /> : ""}
                </a>
                <a href="#" className="font-extralight text-[16px] hidden md:block">Cart</a>
                {label3 && <div className="xl:hidden">{label3}</div>}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center px-0 md:px-5 cursor-pointer">
                <div className="relative flex items-center p-2">
                  <a href="#" className="flex items-center text-[16px] leading-[24px] no-underline text-center">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="mr-2" />
                  </a>
                  <a className="font-extralight text-[16px] whitespace-nowrap hidden lg:block">Become a Seller</a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center px-0 md:px-5 cursor-pointer">
                <div className="relative flex items-center p-2">
                  <a href="#" className="flex items-center text-[16px] leading-[24px] no-underline text-center">
                    <img className="hidden lg:block" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="More" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </header>
      </div>
    </section>
  );
};

export default HomeNavbar;

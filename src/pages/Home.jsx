import Banner from "../components/atoms/Banner"
import BannerProduct from "../components/atoms/BannerProduct"
import OfferBanners from "../components/atoms/OfferBanners"
import BrandDiectory from "../components/molecules/BrandDiectory"
import FlipkartInfo from "../components/molecules/FlipkartInfo"
import HomeIconsList from "../components/molecules/HomeIconsList"
import ProudctBaner from "../components/molecules/ProudctBaner"
import BanerSlider from "../components/organisums/BanerSlider"
import Footer from "../components/organisums/Footer"
import HomeNavbar from "../components/organisums/HomeNavbar"
import icon1 from "../assets/img/iconmb1.svg"
import icon2 from "../assets/img/icon2mb.svg"
import MobileSecondnav from "../components/atoms/MobileSecondnav"


const Home = () => {
  const icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
  const icon3 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
  return (
    <div className="bg-[#f8f8f8] w-full h-[100dvh] flex flex-col">

      <div className="flex justify-center flex-col">
        <HomeNavbar icon={icon} icon1={icon1} icon2={icon2} icon3={icon3} text3={true} label2={"Login"} homePage={true}/>
        <MobileSecondnav/>
      </div>

      <div className="flex-1 overflow-y-scroll overflow-x-hidden [scrollbar-width:none] xl:block">
        <div className="m-0 flex justify-center md:mx-4 overflow-x-hidden">
          <div className="max-w-full flex w-full flex-col
                          md:!max-w-[996px] md:!mt-2 
                          lg:!max-w-[1600px] lg:!mt-2">
            <HomeIconsList style="hidden xl:block"/>
            <BanerSlider />
            <HomeIconsList style="block xl:hidden"/>
            <ProudctBaner />
            <OfferBanners />
            <Banner/>
          </div>
        </div>

        <BrandDiectory />
        <FlipkartInfo />
        <Footer />
      </div>

    </div>
  )
}

export default Home

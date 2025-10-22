import "../../styles/NavBar.css"
import ToggleItemNavbar from "./ToggleItemNavbar"

const NavBar = () => {
  return (
    <nav className="navbar__wrapper hidden xl:block">
        <div className="navbar__base">
            <div className="padded-section"></div>

            <div className="navbar__content">
                <section className="main-logo__wrapper">
                    <div className="main-logo__base">
                        <a className="main-logo">
                            <img width="75" src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="W5mR4e"></img>
                        </a>
                        <a className="sub-logo">
                            Explore
                            <span className="plus-text"> Plus</span>
                            <img width="10" className="inline-block relative -top-0.5" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></img>
                        </a>
                    </div>
                </section>

                <section className="search-section__wrapper">
                    <form className="search-section__form">
                        <div className="search-section__base">
                            <div className="input-base">
                                <input placeholder="Search for products, brands and more"></input>
                            </div>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                            </button>
                        </div>
                    </form>
                </section>

                <section className="login-button__wrapper">
                    <div className="login-button__base">
                        <div className="login-text__wrapp">
                            <a>Login</a>
                        </div>
                    </div>
                </section>    

                <section className="actions-buttons">
                    <a>
                        <span>Become a Seller</span>
                    </a>
                </section>

                <section className="actions-buttons">
                    <div className="action-button__wrap">
                        <div className="action-button__text">
                            More
                        </div>
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="Wto0b0"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="-dC5Le"></path></svg>
                    </div>
                </section>

                <section className="actions-buttons">
                    <div className="cart__wrap">
                        <div className="cart__base">
                            <a>
                                <svg className="relative top-0.5" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                <span>Cart</span>
                            </a>
                        </div>

                    </div>
                </section>       
            </div>

            <div className="padded-section"></div>
        </div>
     
    </nav>
  )
}

export default NavBar

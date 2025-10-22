
const Banner = () => {
    return (
        <div className="flex flex-col items-stretch relative overflow-hidden xl:hidden">
            <a href="" className="flex items-stretch flex-col relative flex-1 overflow-hidden rounded-[16px] m-3">
                <div className="">
                    <picture>
                        <source
                            srcSet="https://rukminim2.flixcart.com/fk-p-flap/1470/330/image/971912465c051177.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/2940/660/image/971912465c051177.jpeg?q=60 2x"
                            media="(min-width: 1192px)"
                        />
                        <source
                            srcSet="https://rukminim2.flixcart.com/fk-p-flap/910/200/image/971912465c051177.jpeg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/1820/400/image/971912465c051177.jpeg?q=60 2x"
                            media="(min-width: 768px) and (max-width: 1191px)"
                        />
                        <img
                            src="https://rukminim2.flixcart.com/fk-p-flap/440/100/image/971912465c051177.jpeg?q=80"
                            alt="Image"
                            className=""
                            style={{
                                filter: "none",
                                opacity: 1,
                                transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
                                width: "100%",
                                margin: "auto",
                                display: "block",
                                objectFit: "contain",
                                aspectRatio: "9/2",
                            }}
                            aria-busy="false"
                            data-highres-loaded="false"
                            loading="lazy"
                            fetchPriority="auto"
                        />
                    </picture>
                </div>
            </a>
        </div>
    )
}

export default Banner



const Banner = () => {
    return (
        // <div className="h-[70vh] bg-green-200">
        //     <h2>This is banner</h2>
        // </div>
        <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-white bg-opacity-95"></div> {/* Change the background color here */}
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-[#0B0B0B] text-5xl font-bold">I Grow By Helping People In Need</h1>
            <p className="mb-5 text-[#0B0B0B]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;
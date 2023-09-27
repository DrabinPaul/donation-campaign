import Cover from '../../assets/images/banner.png'

const Banner = ({handleSearch}) => {
  const bannerImage = {
    backgroundImage: `url(${Cover})`
  }
  return (
    <div className="hero h-[70vh] rounded mt-3" style={bannerImage}>
      <div className="hero-overlay bg-white bg-opacity-95"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-[#0B0B0B] text-5xl font-bold pb-5">I Grow By Helping People In Need</h1>
          <div className="">
            <form action="" >
              <input
                name="search"
                type="text"
                onChange={handleSearch}
                placeholder="Search Here"
                className="py-3 p-5 w-2/3 rounded-l-lg border"
              />
              <button className="py-3 px-5 bg-[#FF444A] text-center border-[#FF444A] rounded-r-lg text-white font-bold">
              Search
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Banner;
import React from 'react';

const Banner = ({ searchText, setSearchText, fetchData }) => {
  return (
    <div className='border-none lg:px-5'>
      <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/zZdqnv7/donation-1.png)' }}>
        <div className="hero-overlay bg-white bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-center mt-10 font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="flex mt-9 justify-center">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                type="text"
                placeholder="Search here...."
                className="input input-bordered w-full max-w-xs text-black"
              />
              <button className="btn btn-error absolute ml-64 text-white rounded-l-[0px]" onClick={fetchData}>
                Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;
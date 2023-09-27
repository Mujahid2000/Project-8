import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';

const Home = () => {
  
  const cards = useLoaderData()
  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
   fetchData();
  },[])

  const fetchData = () => {
    if(searchText === '') {
      setDataList(cards);
    }
    else {
      const filteredData = cards.filter((card) => card.category.toLowerCase().includes(searchText.toLowerCase()));
      setDataList(filteredData);
    }
  }


  return (
    <div>
      <div>
        <div className='mt-9'>
          {/* <h1 className="text-5xl text-center mt-10 font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="flex mt-9 justify-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-error absolute ml-64 text-white">
            Search{" "}
          </button>
        </div> */}
          <Banner searchText={searchText} setSearchText={setSearchText} fetchData={fetchData}></Banner>
        </div>
        <Cards cards={dataList}></Cards>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [allDonated, setAllDonated] = useState([]);
  const [noFound, setNoFound] = useState(false);




  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('Donet'));
    if (storedItems) {
      setAllDonated(storedItems);
      setDonated(storedItems.slice(0, 4));
    } else {
      setNoFound('No Data Found Here!');
    }
  }, []);

  const handlebutton = () => {
    setDonated(allDonated);
  };

  return (
    <div className="justify-center items-center px-5">
      {noFound ? (
        <p className="text-center flex justify-center items-center h-96 text-6xl text-red-500 font-bold">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="grid  grid-cols-2 gap-5 mt-10">
            {donated.map((card, index) => {
              const categoryBgColor = card["category_bg-color"];
              return <section key={index}>
                <div className="h-full">
                  <div className="card h-full flex flex-col lg:flex-row card-side bg-base-100 shadow-xl" style={{
                    backgroundColor: `${card["card_bg_color"]}`,
                  }}>
                    <img src={card.image} alt="Movie" className="h-full lg:w-[40%] rounded-t-lg rounded-l-none lg:rounded-l-lg lg:rounded-tr-none" />
                    <div className="card-body">
                      <h2 className="card-title px-4 py-1 rounded-lg w-fit" style={{
                        color: card.text_color, backgroundColor: `${categoryBgColor}`
                      }}>{card.category}</h2>
                      <h3 className="text-2xl text-black font-bold">{card.title}</h3>
                      <p style={{
                        color: card.text_color,
                        fontWeight: "bold"
                      }}>${card.price}</p>
                      <div className="card-actions mt-8">
                        <Link to={`/cardOne/${card.id}`} >

                          <button className="btn btn-primary border-none text-white" style={{
                            backgroundColor: card.text_color
                          }}>View Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            }
            )}
          </div>
          {allDonated.length > 4 && allDonated.length !== donated.length && (
            <div className="justify-center items-center flex">
              <button onClick={handlebutton} className="btn bg-[#009444] text-white mt-24">See All</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;

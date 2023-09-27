import swal from "sweetalert";

const CardsDetails = ({ cards }) => {
  const { id, images, price, title, Description } = cards || {};

  const handleDonetCard = () => {
    const storedItems = JSON.parse(localStorage.getItem('Donet')) || [];
    const isExist = storedItems.some((item) => item.id === id);

    if (!isExist) {
      const updatedDonetArray = [...storedItems, cards];
      localStorage.setItem('Donet', JSON.stringify(updatedDonetArray));
      swal("Good job!", "You clicked the button!", "success");
    } else {
      swal("Already Added", "You clicked the button already!", "warning");
    }
  };

  const cardBgColor = cards["text_color"];
  const cardStyle = {
    backgroundColor: cardBgColor,
  };

  const cardRedius = cards["borderRadius"];
  const borderRedius = {
    borderRadius: cardRedius
  };



  return (
    <div className="pb-14 pt-6" >
      <div className="relative">
        <div className="flex justify-center items-center">
          <img   src={images} alt="" className="w-full 2xl:rounded-lg" />
        </div>
        <div className="absolute w-full py-10  bottom-0 left-0 bg-[#0B0B0B80] p-8 rounded-b-[8px]">
          <button onClick={handleDonetCard} style={cardStyle} className="btn py-4 px-6 text-white   border-none rounded-[8px]">Donate ${price}</button></div>
      </div>
      <div className="px-5 2xl:px-0">
        <h2 className="text-5xl text-black font-medium mt-14">{title}</h2>
        <p className="mt-6 text-base">{Description}</p>
      </div>
   

    </div>
  );
};

export default CardsDetails;

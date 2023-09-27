import { Link } from "react-router-dom";

const Card = ({ cards }) => {
  const { id, image, title, category } = cards || {}
  const textColor = cards["text_color"];
  const categoryBgColor = cards["category_bg-color"];
  const cardRedius = cards["cardRounded"];
  const cardBgColor = cards["card_bg_color"];
  const widthpx = cards["width"];

  const cardTitleStyle = {
    color: textColor,
  };
  const categoryStyle = {
    backgroundColor: categoryBgColor,
  };
  const cardStyle = {
    backgroundColor: cardBgColor,
    borderRedius: cardRedius + 'px'
  };
  const categoryStylesp = {
    width: widthpx + 'px',
    backgroundColor: categoryBgColor
  };



  return (
    <div className="rounded-lg">
      <Link to={`cardOne/${id}`}>
        <div className="rounded-lg" style={cardStyle}>
          <div className="card rounded-lg card-compact shadow-xl">
            <figure>
              <img className="w-full"
                src={image}
                alt={category}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title py-1 px-2 w-fit text-center  rounded-lg " style={{...cardTitleStyle, ...categoryStyle, ...categoryStylesp, ...cardTitleStyle}}>{category}</h2>
              <h2 style={cardTitleStyle} className="font-bold text-xl">{title}</h2>

            </div>
          </div>
        </div>
      </Link>

    </div>


  );
};

export default Card;

import "./Product.scss";
import Star from "../../assets/Vector.svg";
import useData from "../../hooks/useData";

const Product = () => {
  const [cofeData] = useData()

  return (
    <div className="product">
      {
       cofeData &&
        cofeData.map((cofe) => (
      <div key={cofe.id} className="product__cofe">
        <div className="product__cofe--image">
          <img className="cofeImg" src={ require('../../assets/unsplash_L-sm1B4L1Ns.svg').default} alt="" />
          <div className="product__cofe--image--rating">
            <img src={Star} className="ratingIcon" alt="" />
            <h5>{cofe.rating}</h5>
          </div>
        </div>
        <div className="product__cofe--title">
          <h1>{cofe.name}</h1>
          <p>{cofe.desc}</p>
        </div>
        <div className="product__cofe--price">
          <h2>Rp{cofe.price}.000</h2>
          <h3>Rp{cofe.prevPrice}.000</h3>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Product;

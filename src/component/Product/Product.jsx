import "./Product.scss";
import Coffee from "../../assets/unsplash_L-sm1B4L1Ns.svg";
import Star from "../../assets/Vector.svg";
import {data} from '../../data'

const Product = () => {
  return (
    <div className="product">
      {
        data.map((cofe) => (
      <div key={cofe.img} className="product__cofe">
        <div className="product__cofe--image">
          <img className="cofeImg" src={Coffee} alt="" />
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

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Filter, Star, BadgeDollarSign, BadgePercent } from "lucide-react";
import "./Category.scss";
import "swiper/css";


const categoryBtns = [
  {
    name: "Coffee",
    category: "coffee",
  },
  {
    name: "Non Coffee",
    category: "nonCofe",
  },
  {
    name: "Pastry",
    category: "pastry",
  },
];

const Category = () => {


  return (
    <>
      <div className="category">
        <div className="category__top">
          {categoryBtns.map((btn) => (
            <a key={btn} href="#">
              {btn.name}{" "}
            </a>
          ))}
        </div>

        <Swiper
          className="category__filter"
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="category__filter--btn">
            <Filter className="category__filter--btn--icon" />
            <input id="btn" type="radio" />
            <label htmlFor="btn">Filter</label>
          </SwiperSlide>
          <SwiperSlide className="category__filter--btn">
            {" "}
            <Star className="category__filter--btn--icon" />
            <input id="btn" type="radio" name="filter" value='recommend' />
            <label htmlFor="btn">Rating</label>
          </SwiperSlide>
          <SwiperSlide className="category__filter--btn">
            {" "}
            <BadgeDollarSign className="category__filter--btn--icon" />
            <input  type="radio" />
            <label >Price</label>
          </SwiperSlide>
          <SwiperSlide className="category__filter--btn">
            {" "}
            <BadgeDollarSign className="category__filter--btn--icon" />
            <input id="btn" type="radio" />
            <label htmlFor="btn">Promocode</label>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;

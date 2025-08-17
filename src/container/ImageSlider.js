import SimpleImageSlider from "react-simple-image-slider";
// import Images from "../Asset/Images/images.jpeg";
import ImageText from "../components/ImageText";
import RecycleImage from '../Asset/Images/yellowDustBin.jpg'
import HumanRecycleImage from '../Asset/Images/humanRecycle.jpg'
import LittleGirlRecycleImage from '../Asset/Images/littleGirl.jpg'
const images = [{ url: LittleGirlRecycleImage }, { url: HumanRecycleImage }, { url: RecycleImage }];

const ImageSlide = () => {
  // console.log("image", Images);
  return (
    <div className="slider-container">
      <ImageText ></ImageText>
      <div className="imageSliders">
        <SimpleImageSlider
          width={'100%'}
          height={'100%'}
          images={images}
          // showBullets={true}
          // showNavs={true}
          slideDuration={1}
          autoPlay={true}
          style={{ width: '100vw', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default ImageSlide;

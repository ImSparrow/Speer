import ImageLoader from "../components/ImageLoader/ImageLoader";
import Navbar from "../components/Navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar
        titleStyle={{ color: "white" }}
        hamStyle={{ background: "white" }}
        NavStyle={{
          circle: { style: { backgroundColor: "#1FE1E9" } },
          side: { onStyle: { color: "white" }, offStyle: { color: "black" } },
        }}
      ></Navbar>
      <ImageLoader></ImageLoader>
    </>
  );
};

export default Hero;

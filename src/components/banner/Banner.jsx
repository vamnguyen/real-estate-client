import bannerImage from "~/assets/banner.png";

const Banner = () => {
  return (
    <div className="sticky top-0">
      <img src={bannerImage} alt="banner" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-primary-50 text-lg mb-6">
          We have properties in these areas
        </p>
      </div>
    </div>
  );
};

export default Banner;

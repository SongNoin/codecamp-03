import BannerUI from "./banner.presenter";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carecel",
    autoplay: true,
  };
  return <BannerUI settings={settings} />;
}

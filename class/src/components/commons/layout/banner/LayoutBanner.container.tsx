import BannerUI from "./LayoutBanner.presenter";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    className: "carecel",
  };
  return (
    <BannerUI
    // settings={settings}
    />
  );
}

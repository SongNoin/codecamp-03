import LazyLoad from "react-lazyload";

export default function LazyLoadPage() {
  return (
    <div>
      <div style={{ height: "1500px" }}></div>
      <LazyLoad height={200}>
        <img
          src="/images/jungah.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/pinkman.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/arrow.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/home.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/logo.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/lotto.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/images/map.png"
          style={{ height: "500px", width: "500px" }}
        />
      </LazyLoad>
    </div>
  );
}

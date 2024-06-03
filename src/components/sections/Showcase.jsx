import React, { useRef } from "react";
import img1 from "../../assets/Nfts/bighead-1.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
import img10 from "../../assets/Nfts/bighead-10.svg";
import ETH from "../../assets/icons8-ethereum-48.png";
const NftItem = ({ img, number = 0, price, passedRef }) => {
  let handleSlideStop = () => {
    passedRef.current.style.animationPlayState = "paused";
  };
  let handleSlideStart = () => {
    passedRef.current.style.animationPlayState = "running";
  };
  return (
    <div
      id="showcase"
      className="w-[15rem] rounded-lg cursor-pointer bg-slate-400 mr-5"
      onMouseEnter={handleSlideStop}
      onMouseLeave={handleSlideStart}
    >
      <img src={img} alt="The Wierdos" />
      <div className="flex justify-between py-[0.8rem] px-[1rem] border-1 rounded-b-2xl bg-black/35">
        <div className="">
          <span>Weirdos</span>
          <h1>#{number}</h1>
        </div>
        <div className="">
          <span>Price</span>
          <div className="flex items-center justify-center">
            <img src={ETH} alt="ETH" className="w-[1rem]" />
            <h1>{Number(price)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
const Showcase = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  return (
    <section className="overflow-hidden w-full min-h-[100vh] relative flex flex-col items-center justify-center">
      <div className="flex my-[2rem] slide-right-animation" ref={firstRowRef}>
        <NftItem img={img1} number={2} price={2} passedRef={firstRowRef} />
        <NftItem img={img2} number={2} price={2} passedRef={firstRowRef} />
        <NftItem img={img3} number={2} price={2} passedRef={firstRowRef} />
        <NftItem img={img4} number={2} price={2} passedRef={firstRowRef} />
        <NftItem img={img5} number={2} price={2} passedRef={firstRowRef} />
      </div>
      <div className="flex my-[2rem]  slide-left-animation" ref={secondRowRef}>
        <NftItem img={img6} number={2} price={2} passedRef={secondRowRef} />
        <NftItem img={img7} number={2} price={2} passedRef={secondRowRef} />
        <NftItem img={img8} number={2} price={2} passedRef={secondRowRef} />
        <NftItem img={img9} number={2} price={2} passedRef={secondRowRef} />
        <NftItem img={img10} number={2} price={2} passedRef={secondRowRef} />
      </div>
    </section>
  );
};

export default Showcase;

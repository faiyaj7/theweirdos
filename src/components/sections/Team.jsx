import React from "react";
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

const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <div
      id="team"
      className="w-[calc(20rem-4vw)] py-[1rem] my-[2rem] mx-[1rem] relative  rounded-lg border-black border-2"
    >
      {/* {runFireworks()} */}
      <div className="w-[15rem] mx-auto rounded-3xl cursor-pointer border border-black/60 bg-[#EEEDDE]">
        <img
          src={img}
          alt={name}
          className="hover:-translate-y-4 hover:scale-110 transition-all duration-300"
        />
      </div>
      <h2 className="text-lg flex items-center justify-center uppercase mt-[1rem]">
        {name}
      </h2>
      <h2 className="text-lg flex items-center justify-center capitalize text-black/50">
        {position}
      </h2>
    </div>
  );
};
const Team = () => {
  return (
    <section className="min-h-screen w-full relative">
      <h1 className="w-fit capitalize  my-[1rem] mx-auto border-b-2 border-black text-2xl">
        Team
      </h1>
      <div className="w-[75%] my-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
        <MemberComponent img={img1} name="Skyblaze" position="founder" />
        <MemberComponent img={img2} name="MEGNUM" position="Co-Founder" />
        <MemberComponent img={img3} name="Monkey King" position="Director" />
        <MemberComponent img={img4} name="Black Panther" position="Manager" />
        <MemberComponent img={img5} name="DeathStroke" position="Artist" />
        <MemberComponent
          img={img6}
          name="Lazy Kong"
          position="Social Media Manager"
        />
        <MemberComponent
          img={img7}
          name="Cyber Punk"
          position="BlockChain Specialist"
        />
        <MemberComponent img={img8} name="Monk" position="Web3 Developer" />
        <MemberComponent
          img={img9}
          name="Bananas"
          position="Graphic Designer"
        />
        <MemberComponent
          img={img10}
          name="Mr. Dragon"
          position="Data Scientist"
        />
      </div>
    </section>
  );
};

export default Team;

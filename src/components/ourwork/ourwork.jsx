const data = [
  {
    imgSrc: "assets/img1.webp",
    contHead: "CSD",
    content: ` CSD has transformed from a Convenience Store to a Shopping Complex
               with 110+ modern outlets, offering diverse shopping facilities.
               Proudly serving underserved areas. CSD also has a Public Website
              and various E-Commerce apps`,
    skill1: "assets/next-js.png",
    skill2: "assets/react.png",
    skill3: "assets/Typescript.png",
    skill4: "assets/tailwind.png",
  },
  {
    imgSrc: "assets/img2.webp",
    contHead: "EQ & YOU",
    content: `The EI App, built with Flutter, is a mobile tool for emotional intelligence training.
     It boasts features like progress tracking, activity monitoring, and content from expert Brent
      Darnell. Users can enhance emotional intelligence and stay motivated.`,
    skill1: "assets/figma.webp",
    skill2: "assets/flutter.webp",
    skill3: "assets/nest.webp",
    skill4: "assets/docker.webp",
  },
  {
    imgSrc: "assets/img3.webp",
    contHead: "Isekai Verse",
    content: `Isekaiverse is a cross-chain web3 project built primarily for EVM-based blockchains.
     The project, among other things, includes multiple NFT marketplaces, Lootboxes with off-chain
      randomness through Oracles.`,
    skill1: "assets/postgress.webp",
    skill2: "assets/crypto.webp",
    skill3: "assets/figma.webp",
    skill4: "assets/node.webp",
  },
  {
    imgSrc: "assets/img4.webp",
    contHead: "Nk Associates",
    content: `Stixor created a website and app for NK Associates, a real estate firm.
     They showcase properties with virtual tours and detailed 
    listings on this dynamic platform. We are very humble to over client they loving and beautiful`,
    skill1: "assets/Typescript.png",
    skill2: "assets/nest.webp",
    skill3: "assets/tailwind.png",
    skill4: "assets/figma.webp",
  },
];
const Ourwork = () => {
  return (
    <>
      <div className="md:w-[80%] mx-auto pt-14 py-8">
        <div className="text-white text-center">
          <h1 className="pb-5 md:text-5xl text-2xl font-bold">Our Work</h1>
          <p className="pb-5 md:text-2xl  font-thin">
            How well we is determined not by how well we say things, but how
            well we are understood.
          </p>
        </div>
        {data.map((data, id) => (
          <div className="grid lg:grid-cols-3 pb-10" key={id}>
              <div className="col-span-2">
                <img
                  src={data.imgSrc}
                  alt="img1"
                  className="lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none shadow-lg"
                />
              </div>
              <div className="py-5 bg-[#010e42] lg:rounded-r-3xl rounded-b-3xl text-white lg:rounded-bl-none px-6 shadow-lg flex flex-col justify-between">
                <h3 className="md:text-3xl text-xl font-bold pb-3">
                  {data.contHead}
                </h3>
                <p className="md:text-xl text-sm font-thin">{data.content}</p>
                <div className="flex gap-8 pt-5">
                  <div className="bg-[#4a119f] hover:bg-[#935ae9] lg:w-16 lg:h-14 w-10 h-10 flex  justify-center items-center rounded-xl">
                    <img src={data.skill1} alt="next.js" className="w-[80%]" />
                  </div>
                  <div className="bg-[#4a119f] hover:bg-[#935ae9] lg:w-16 lg:h-14 w-10 h-10 flex  justify-center items-center rounded-xl">
                    <img src={data.skill2} alt="next.js" className="w-[80%]" />
                  </div>
                  <div className="bg-[#4a119f] hover:bg-[#935ae9] lg:w-16 lg:h-14 w-10 h-10 flex  justify-center items-center rounded-xl">
                    <img src={data.skill3} alt="next.js" className="w-[80%]" />
                  </div>
                  <div className="bg-[#4a119f] hover:bg-[#935ae9] lg:w-16 lg:h-14 w-10 h-10 flex  justify-center items-center rounded-xl">
                    <img src={data.skill4} alt="next.js" className="w-[80%]" />
                  </div>
                </div>
              </div>
            </div>
        ))}
        <div className="text-center">
          <button className="bg-white lg:w-96 w-72 transition duration-700 ease-in-out hover:bg-[#4e1daa]  border-white border hover:text-white p-2 rounded-3xl">
            View More
          </button>
        </div>
      </div>
    </>
  );
};
export default Ourwork;
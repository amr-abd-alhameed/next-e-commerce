import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured Product" fill />
      </div>
    </div>
  );
};

export default Homepage;

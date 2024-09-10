import { featuredCards } from '../../public/data'
import FeaturedCards from "@/components/Featured";
import { Heading2 } from "@/components/ui/headings";

export default function Home() {
  return (

    <main className=" p-24 bg-black ">
      <section className="py-20 mb-16  text-center">
        <h1 className=" text-transparent bg-clip-text bg-gradient-to-t from-[#efefef] to-[#888888] font-bold text-4xl md:text-6xl lg:text-8xl  mt-8 mb-4">
          CRYPTIX
        </h1>
        <p className="text-xl text-gray-300">
          Explore the World of Classic Encryption Techniques
        </p>
      </section>
      <section>
        
      <Heading2 text="Featured Ciphers" className="text-center"/>
      <FeaturedCards data={featuredCards} />
      </section>
    </main>
  );
}

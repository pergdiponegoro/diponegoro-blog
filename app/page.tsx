import { client } from "@/lib/sanity";
import { SectionTwo } from "./components/SectionTwo";
import ImageSlider from "./components/ImageSlider";
import { Footer } from "./components/Footer";


export default async function Home() {
  const query = `*[_type == "carouselImage"] | order(_createdAt desc) {
    title,
    image,
    caption,
  }`;

  // Fetch data from Sanity
  const images = await client.fetch(query);
  
  return (
    <>
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <ImageSlider images={images} />
        <div className="mt-6">
          <SectionTwo />
        </div>
      </div>

      {/* Footer Section - Outside of the main content container */}
      <Footer />
    </>
  );
}

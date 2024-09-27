import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GalleryCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; // Revalidate at most every 30 seconds

async function getData() {
  const query = `
    *[_type == 'gallery'] | order(_createdAt desc) [0...4] {
        "currentSlug": slug.current,
        title,
        _id,
        description,
        tags,
        "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export async function SectionTwo() {
  const data: GalleryCard[] = await getData();

  return (
    <div className="py-12">
      {/* Section Title */}
      <h1 className="text-2xl font-semibold lg:text-3xl pt-5 mb-8 text-center">
        Dibawah Ini adalah beberapa foto gallery kami:
      </h1>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 sm:grid-cols-1 max-w-7xl mx-auto">
        {data.map((item) => (
          <Card
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={item._id}
          >
            <Link href={`/post/${item.currentSlug}`} className="group block">
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl relative">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 rounded-t-2xl"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h2 className="font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-3 text-sm">
                  {item.description}
                </p>

                {/* Tags and Read More */}
                <div className="flex justify-between items-center mt-4">
                  {/* Tags */}
<div className="flex space-x-2">
  {item.tags && Array.isArray(item.tags) ? (
    item.tags.map((tagItem, index) => (
      <span
        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
        key={index}
      >
        {tagItem}
      </span>
    ))
  ) : (
    <span className="text-gray-500">No tags available</span>
  )}
</div>

                  {/* Read More Button */}
                  <Button asChild variant="outline" className="text-primary">
                    <Link href={`/post/${item.currentSlug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <Button asChild variant="default" className="px-6 py-3 text-lg font-semibold">
          <Link href={`/gallery`}>Lihat Selengkapnya</Link>
        </Button>
      </div>
    </div>
  );
}

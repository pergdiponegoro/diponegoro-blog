import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GalleryCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `*[_type == 'gallery'] | order(_createdAt desc) {
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

export default async function GalleryPage() {
  const data: GalleryCard[] = await getData();

  return (
    <>
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto py-10">
        <h1 className="text-4xl font-bold lg:text-5xl pt-5 text-center mb-6 text-gray-900">
          Gallery Kami
        </h1>
        <p className="leading-7 text-muted-foreground text-center text-lg mb-10">
          Di bawah ini adalah beberapa foto gallery dari Perguruan Diponegoro Kisaran
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 sm:grid-cols-1">
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
                      {item.tags.map((tagItem, index) => (
                        <span
                          className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                          key={index}
                        >
                          {tagItem}
                        </span>
                      ))}
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
        <div className="mt-10 text-center">
        <Link href="/" className="text-primary hover:underline text-lg font-medium">
          Kembali ke Beranda
        </Link>
      </div>
      </section>
      <div className="w-full bg-gray-900">
        <Footer />
      </div>
    </>
  );
}

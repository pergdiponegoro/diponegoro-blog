import { Footer } from "@/app/components/Footer";
import { BlogGallery } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == "gallery" && slug.current == '${slug}']{
        "currentSlug": slug.current,
        title,
        content,
        image,
    }[0]`;
    
    const data = await client.fetch(query);
    return data;
}

export default async function GalleryBlog({
    params
}: {
    params: { slug: string };
}) {
    const data: BlogGallery = await getData(params.slug);

    return (
        <>
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                    Perguruan Diponegoro Kisaran
                </span>
                {/* Responsive Title */}
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-8 font-bold underline underline-offset-8 decoration-2 tracking-tight">
                    {data.title}
                </span>
            </h1>

            {/* Centering the image with padding */}
            <div className="flex justify-center mt-8 px-4">
                <Image 
                    src={urlFor(data.image).url()} 
                    width={1216} 
                    height={600} 
                    alt="Image"
                    priority
                    className="rounded-lg border"
                />
            </div>

            {/* Adding padding to the content to match image grid */}
            <div className="mt-16 px-8">
                <div className="prose prose-blue prose-xl dark:prose-invert prose-a:text-primary max-w-fit font-normal">
                    <PortableText value={data.content} />
                </div>
            </div>
        </div>
        <div className="w-full bg-gray-900 mt-10"> {/* Ensure background matches your footer */}
        <Footer />
      </div>
      </>
    );
}

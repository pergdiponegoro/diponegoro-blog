export interface GalleryCard{
    image(image: any): unknown;
    title: string;
    content: any;
    _id: string;
    imageUrl: string;
    tags: string[];
    description: string;
    currentSlug: string;
}

export interface GalleryBlog{
    currentSlug: string;
    title: string;
    content: any;
    image:any;
}

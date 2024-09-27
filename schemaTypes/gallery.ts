import { defineField, defineType } from "sanity";

export const galleryType = defineType({
    name: 'gallery',
    title: 'Gallery',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type:'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title',
            }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type:'image'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type:'text',
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of : [
                {
                    type: 'block',
                }
            ]
          }),
        defineField({
            name:'tags',
            title:'Tags',
            type:'array',
            of: [{type: 'string'}],
        })
    ]
})
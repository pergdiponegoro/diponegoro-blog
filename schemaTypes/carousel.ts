import { defineField, defineType } from 'sanity';

export const carouselImage = defineType({
  name: 'carouselImage',
  title: 'Carousel Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => 
        Rule.required()
            .max(100)
            .warning('Description MAX 100 characters.')
            .error('Description MAX 100 characters.'),
    }),
  ],
});
export default {
  name: 'stuff',
  title: 'Stuff',
  type: 'document',
  fields: [
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'personalImage',
      title: 'Personal Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      title: "Rating",
      name: "rating",
      type: "rating", // Required
      description: "Apply a rating out of 5 stars",
      options: {
        stars: 5, // Optional. Default 5.
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'partNumber',
      title: 'Part #',
      type: 'string',
    },
    {
      name: 'sizeVariant',
      title: 'Size/Variant',
      type: 'string',
    },
    {
      name: 'cost',
      title: 'Approximate Cost $USD',
      type: 'number',
    },
    {
      name: 'isBorrowable',
      title: 'Borrowable?',
      type: 'boolean',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
}

import { CollectionConfig } from 'payload'

export const ProductImages: CollectionConfig = {
  slug: 'product_images',
  labels: {
    singular: 'Product Image',
    plural: 'Product Images',
  },
  admin: {
    group: 'E-Commerce',
  },

  timestamps: true,

  upload: {
    disableLocalStorage: true,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'deleted_at',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

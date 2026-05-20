import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
    group: 'E-Commerce',
    defaultColumns: ['name', 'price', 'stock', 'is_active'],
  },

  timestamps: true,

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 150,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: { step: 0.01 },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'product_images',
    },
    {
      name: 'is_active',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
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

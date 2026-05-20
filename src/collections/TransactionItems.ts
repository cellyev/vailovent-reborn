import { CollectionConfig } from 'payload'

export const TransactionItems: CollectionConfig = {
  slug: 'transaction_items',
  labels: {
    singular: 'Transaction Item',
    plural: 'Transaction Items',
  },
  admin: {
    group: 'E-Commerce',
    defaultColumns: ['transaction', 'product', 'quantity', 'subtotal'],
  },

  timestamps: true,

  fields: [
    {
      name: 'transaction',
      type: 'relationship',
      relationTo: 'transactions',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: { step: 0.01 },
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
      min: 0,
      admin: { step: 0.01 },
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

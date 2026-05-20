import { CollectionConfig } from 'payload'

export const Transactions: CollectionConfig = {
  slug: 'transactions',
  labels: {
    singular: 'Transaction',
    plural: 'Transactions',
  },
  admin: {
    useAsTitle: 'customer_name',
    group: 'Transaction Management',
    defaultColumns: ['customer_name', 'customer_email', 'total_amount', 'status', 'createdAt'],
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  timestamps: true,

  fields: [
    {
      name: 'device_id',
      label: 'Device ID',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'customer_name',
      label: 'Customer Name',
      type: 'text',
      required: true,
      maxLength: 150,
    },
    {
      name: 'customer_email',
      label: 'Customer Email',
      type: 'email',
      required: true,
    },
    {
      name: 'total_amount',
      label: 'Total Amount',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        step: 0.01, // decimal(12,2)
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },

    {
      name: 'deleted_at',
      label: 'Deleted At',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

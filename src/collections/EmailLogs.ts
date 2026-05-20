import { CollectionConfig } from 'payload'

export const EmailLogs: CollectionConfig = {
  slug: 'email_logs',
  labels: {
    singular: 'Email Log',
    plural: 'Email Logs',
  },
  admin: {
    group: 'E-Commerce',
    defaultColumns: ['transaction', 'email_type', 'sent_at'],
  },

  fields: [
    {
      name: 'transaction',
      type: 'relationship',
      relationTo: 'transactions',
      required: true,
    },
    {
      name: 'email_type',
      type: 'select',
      required: true,
      options: [
        { label: 'Invoice', value: 'invoice' },
        { label: 'Payment', value: 'payment' },
        { label: 'Reminder', value: 'reminder' },
      ],
    },
    {
      name: 'email_link',
      type: 'text',
      maxLength: 255,
    },
    {
      name: 'sent_at',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
    },
  ],
}

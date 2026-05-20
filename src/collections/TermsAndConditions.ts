import { CollectionConfig } from 'payload'

export const TermsAndConditions: CollectionConfig = {
  slug: 'terms_and_conditions',
  labels: {
    singular: 'Term and Condition',
    plural: 'Terms and Conditions',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Terms and Conditions Management',
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
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 150,
    },
    {
      name: 'content',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      unique: true,
      min: 0,
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

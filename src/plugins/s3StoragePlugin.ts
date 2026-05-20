import { s3Storage } from '@payloadcms/storage-s3'

export const s3StoragePlugin = () =>
  s3Storage({
    bucket: process.env.S3_BUCKET!,

    collections: {
      product_images: {
        prefix: 'product-images/',
      },
    },

    config: {
      endpoint: process.env.S3_ENDPOINT!,
      region: process.env.S3_REGION!,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
      forcePathStyle: true,
    },
  })

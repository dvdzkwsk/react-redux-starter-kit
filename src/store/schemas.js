import { schema } from 'normalizr'

export const categorySchema  = new schema.Entity('categories', {
  service: serviceSchema
}, {
  idAttribute: 'slug'
});

export const serviceSchema   = new schema.Entity('services', {
  category: categorySchema
}, {
  idAttribute: 'slug'
});

export const packageSchema   = new schema.Entity('packages');

export const questionSchema  = new schema.Entity('questions');

export const inquirySchema   = new schema.Entity('inquiries', {
  service: serviceSchema,
  package: packageSchema
}, {
  idAttribute: 'order_number'
});

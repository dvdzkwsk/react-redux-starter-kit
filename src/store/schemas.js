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

export const quotationSchema = new schema.Entity('quotations', {}, {
  idAttribute: 'order_number'
});

export const userSchema = new schema.Entity('users');

export const addressSchema = new schema.Entity('addresses');

export const inquirySchema   = new schema.Entity('inquiries', {
  service: serviceSchema,
  package: packageSchema,
  quotations: [quotationSchema],
  accepted_quotation: quotationSchema,
  user: userSchema,
  address: addressSchema
}, {
  idAttribute: 'order_number'
});

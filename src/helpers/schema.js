import { schema } from 'normalizr'

const conditionSchema = new schema.Entity('conditions', {}, {
  idAttribute: arrayIndexer
})
const actionSchema = new schema.Entity('actions', {}, {
  idAttribute: arrayIndexer
})
const ruleSchema = new schema.Entity('rules', {
  conditions: [conditionSchema],
  actions: [actionSchema]
})
const dimensionSchema = new schema.Entity('dimensions', {}, {
  idAttribute: 'label'
})
const payloadSchema = new schema.Object({
  rules: [ruleSchema],
  dimensions: [dimensionSchema]
})
const adDirectorSchema = new schema.Object({
  payload: payloadSchema
})

function arrayIndexer (value, parent, key) {
  return `${parent.id}_${parent[key].indexOf(value)}`
}

// export { ruleSchema }
export default adDirectorSchema

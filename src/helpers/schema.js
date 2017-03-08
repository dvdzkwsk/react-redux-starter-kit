import { schema } from 'normalizr'

const conditionSchema = new schema.Entity('conditions', {}, {
  idAttribute: arrayIndexer,
  processStrategy: addRuleId
})
const actionSchema = new schema.Entity('actions', {}, {
  idAttribute: arrayIndexer,
  processStrategy: addRuleId
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
  dimensions: [dimensionSchema],
  rule: ruleSchema
})
const adDirectorSchema = new schema.Object({
  payload: payloadSchema
})

function arrayIndexer (value, parent, key) {
  return `${parent.id}_${parent[key].indexOf(value)}`
}

function addRuleId (value, parent, key) {
  return Object.assign({}, value, { ruleId: parent.id })
}

// export { ruleSchema }
export default adDirectorSchema

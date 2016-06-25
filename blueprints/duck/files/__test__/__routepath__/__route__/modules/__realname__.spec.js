import {
  default as <%= camelEntityName%>Reducer
} from '<%= importPath %>/modules/<%= realEntityName %>'

describe('(Redux Module) <%= pascalEntityName %>', () => {
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(<%= camelEntityName %>Reducer).to.be.a('function')
    })
  })
})



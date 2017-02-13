import Immutable from 'immutable'

export default Immutable.fromJS([
  {
    'type': 'timeline',
    'value': {
      'preroll': 'integer',
      'midroll': 'array',
      'postroll': 'integer'
    }
  },
  {
    'type': 'capping',
    'value': {
      'interval': 'integer'
    }
  },
  {
    'type': 'noad',
    'value': {
      'code': 'integer',
      'status': 'string'
    }
  },
  {
    'type': 'dimension',
    'value': {
      'label': 'string',
      'value': 'string'
    }
  },
  {
    'type': 'mediation',
    'value': {
      'label': 'string',
      'rank': 'integer'
    }
  },
  {
    'type': 'cookie',
    'value': {
      'label': 'string',
      'value': 'string',
      'ttl': 'integer'
    }
  },
  {
    'type': 'skip',
    'value': {
      'offset': 'integer'
    }
  },
  {
    'type': 'source',
    'value': {
      'label': 'string',
      'description': 'string',
      'value': 'array',
      'secure': 'boolean',
      'server': 'boolean',
      'timeout': 'array',
      'cookie': 'array',
      'sync': 'array',
      'price': 'string'
    }
  },
  {
    'type': 'timeout',
    'value': {
      'timeout': 'integer'
    }
  }
])

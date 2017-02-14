import React from 'react'
import Immutable from 'immutable'

export const ARRAY = 'ARRAY'
export const BOOL = 'BOOL'
export const NUMBER = 'NUMBER'
export const STRING = 'STRING'

export default Immutable.fromJS({
  timeline: {
    value: {
      preroll: NUMBER,
      midroll: ARRAY,
      postroll: NUMBER
    }
  },
  capping: {
    value: {
      interval: NUMBER
    }
  },
  noad: {
    value: {
      code: NUMBER,
      status: STRING
    }
  },
  dimension: {
    value: {
      label: STRING,
      value: STRING
    }
  },
  mediation: {
    value: {
      label: STRING,
      rank: NUMBER
    }
  },
  cookie: {
    value: {
      label: STRING,
      value: STRING,
      ttl: NUMBER
    }
  },
  skip: {
    value: {
      offset: NUMBER
    }
  },
  source: {
    value: {
      label: STRING,
      description: STRING,
      value: ARRAY,
      secure: BOOL,
      server: BOOL,
      timeout: ARRAY,
      cookie: ARRAY,
      sync: ARRAY,
      price: STRING
    }
  },
  timeout: {
    value: {
      timeout: NUMBER
    }
  }
})

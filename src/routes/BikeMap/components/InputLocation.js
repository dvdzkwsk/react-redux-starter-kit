import React from 'react'

const InputLocation = ({start, end, handleInputChange, getBikeRoutes}) => (
  <div className="outer-form-container" >
    <div>
      <form>
        <ul className="flex-outer">
          <li>
            <label htmlFor="start">Start:</label>
            <input id="start-location" type="text" name="start" value={start} onChange={handleInputChange}/>
          </li>
          <li>
            <label htmlFor="end">End:</label>
            <input id="end-location" type="text" name="end" value={end} onChange={handleInputChange}/>
          </li>
          <li>
            <button type="submit" className='btn btn-primary' onSubmit={getBikeRoutes}>
                Get Routes
            </button>
          </li>
        </ul>
      </form>
    </div>

  </div>
)

export default InputLocation
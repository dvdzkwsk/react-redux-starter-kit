import React from 'react'

export const InputLocation = ({start, end, handleInputChange, getBikeRoutes}) => (
  <div className="outer-form-container" >
    <form>
      <ul className="flex-outer">
        <li>
          <label for="start">Start:</label>
          <input id="start-location" type="text" name="start" value={start} onChange={handleInputChange}/>
        </li>
        <li>
          <label for="end">End:</label>
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
)

export default InputLocation
import React from 'react'

export const Create = () => {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a Kid</h1>
        <form>
          <div className='mb-2'>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" name='firstName' className='form-control' placeholder='Enter FirstName' />
          </div>
          <div className='mb-2'>
            <label htmlFor="lastName">LastName</label>
            <input type="text" name='lastName' className='form-control' placeholder='Enter LastName' />
          </div>
        </form>
      </div>
    </div>
  )
}

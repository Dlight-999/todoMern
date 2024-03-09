import React from 'react'
import Navbar from './Navbar'

function home() {
  return (
    
    <>   
    <Navbar/>
     <div className='tableContainer'>
        <h3>Home</h3>
        <div className='taskTable'>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>title</td>
                    <td>title</td>
                    <td>title</td>
                    <td>title</td>
                    <td>title</td>
                    <td>title</td>
                </tr>
            </table>
        </div>
    </div>
    </>

  )
}

export default home
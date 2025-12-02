import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function Postcard({$id , title , featuredImage}) {
  return (
    <Link to={`/post/$id` }>
        <div className='w-full bg-gray-500 rounded-xl px-4 '>
          <div className='w-full justify-center mb-4'>
            
          </div>
        </div>
    </Link>
  )
}

export default Postcard
import React from 'react'
import { useState , useEffect } from 'react'
import { Container , Postcard, Postcard } from '../Components'
import appwriteService from '../appwrite/config'

function AllPost() {
  const [posts , setPosts] = useState([])
  useEffect (() => {} , [])
  appwriteService.getposts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })
  return (
    <div className='py-8'>
      <Container>
        <div className='flex , flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='py-2 w-1/4'>
              <Postcard post={post}/> 
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
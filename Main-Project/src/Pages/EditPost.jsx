import React from 'react'
import { useEffect , useState } from 'react'
import { Container , PostForm } from '../Components'
import { useParams , useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function EditPost() {
  const [post , setPosts] = useState(null)
  const navigate = useNavigate()
  const {slug} = useParams()

  useEffect(() => {
    if (slug) {
      appwriteService.getpost((slug)).then((post) => {
        if (post) {
          setPosts(post)
        }
      })
    }else {
      navigate('/')
    }
  } , [slug , navigate])

  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm  post={post}/> 
      </Container>
    </div>
  ) : null
}

export default EditPost
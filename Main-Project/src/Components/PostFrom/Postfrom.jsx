import React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input , Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Postfrom({post}) {
  const {register , handleSubmit , control , watch ,
    setValue , getValues } = useForm({
        defaultValues : {
          title : post?.title || '',
          slug : post?.slug || '',
          status : post?.status || 'active',
          content : post?.content || ''
        }
  })

  const navigate  = useNavigate()
  const userData = useSelector(state => state.user.userdata)
  
  //submit button for the post
  const submit = async(data) => {
    //agar post hai tab ka condition mai 
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadfile(data.image[0]) : null
      if (file) {
        await appwriteService.deletefile(post.featuredImage)
      }
      const dbPost = await appwriteService.updatepost(post.$id , {
        ...data,
        featuredImage : file ? file.$id : undefined,
      })
        if (dbPost) {
          navigate(`/post/${post.$id}`)
        }
    }
    else {
      const file = data.image[0] ? appwriteService.uploadfile(data.image[0]) : null

      let fileId = null;
        if (data.image && data.image[0]) {
        const file = await appwriteService.uploadfile(data.image[0]);
        fileId = file.$id;
        }

      const dbPost = await appwriteService.createpost({
      ...data,
      featuredImage: fileId,
      userID: userData.$id,
      });
    }
  }


  //slug tranform
  


  return (
    <div>Postfrom</div>
  )
}

export default Postfrom
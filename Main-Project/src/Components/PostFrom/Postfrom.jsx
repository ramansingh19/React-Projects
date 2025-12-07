import React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input , Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


//Functionality 
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
  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
      .trim()
      .toLocaleLowerCase()
      .replace(/^[a-zA-Z\d\s]+/g, '-')
      .replace(/\s/g, '-')

      return " ";
    }
  } , [])

  React.useEffect(() => {
      const subscription = watch((value , {name}) => {
            if (name === 'title') {
              setValue('slug' , slugTransform(value.title , {shouldValidate : true}))
            }
      })

      return subscription.unsubscribe()
  } , [watch , setValue , slugTransform])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default Postfrom
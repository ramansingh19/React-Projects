import { AiFillLike } from "react-icons/ai";

import { useState } from "react"

export default function LikeButton(){

  let [like , setLike] = useState(0)

  let incLike = () => {
      setLike(like + 1);
      console.log(like);
      
  }

  return(
    <div>
      <h3>like = {like}</h3>
      <button onClick={incLike}><AiFillLike />click</button>
    </div>
  );
}
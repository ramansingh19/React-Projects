import { FaRegHeart } from "react-icons/fa";

export default function LikeButtons() {
  let LikeButton = () => {
    console.log('clicked');
    
  }

  return(
    <div>
      <button onClick={LikeButton}><FaRegHeart /></button>
    </div>
  )
}
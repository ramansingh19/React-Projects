import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function LikeButtons() {
  let [isLiked , setisLiked] = useState(false)
  let [clicks , setclicks] = useState(0)

  let isToggle = () => {
    setisLiked(!isLiked)
    setclicks(clicks + 1)
    document.body.style.backgroundColor = changeColor()
    
  }

  let style = {color : 'red'}

  let changeColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for(let i=1; i<=6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  };

  

  return(
    <div >
      <p>Clicks = {clicks}</p>
      <button style={{fontSize : '3rem'}} onClick={isToggle} >
        {isLiked ? 
        (<FaHeart style={style} /> ) : 
        (<FaRegHeart />)}
        </button>
    </div>
  )
}
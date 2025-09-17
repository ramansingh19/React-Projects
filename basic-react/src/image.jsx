import myphoto from './assets/my-photo.jpg';

function Image() {
  return  (
    <div className='Image'>
      <img src={myphoto} alt="My Photo" width="400px"/>
    </div>
  );
}

export { Image };

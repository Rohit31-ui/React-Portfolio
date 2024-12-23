import React from 'react';

function Cards({src,title,subtitle}) {
  return (
    <div className=''>
    <div className="card m-12"    style={{ width: '18rem' }}>
      {/* <div className="card-body bg-rose-600 m-10">
        <div className='flex justify-center'>
        <img src={src}  alt={title || 'Image'} className="card-img-top w-28 h-28" />
        </div>
        
        <h5 className="card-title text-xl  text-white cursor-pointer text-center ">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted text-white  text-center ">{subtitle}</h6>
      </div> */}

      <div className="card card-side bg-base-100 shadow-xl">
  <figure>
      <img src={src}  alt={title || 'Image'} className="card-img-top w-28 h-28" />
  </figure>
  <div className="card-body">
    <h5 className="card-title text-3xl text-black cursor-pointer  text-center ">{title}</h5>
   
  </div>
</div>


    </div>


    
    </div>
  );
}

export default Cards;

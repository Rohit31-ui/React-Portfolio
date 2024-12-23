import React from 'react';

const ProjectCard = ({ src, title, description }) => {
  return (
    <div>
        
      

<div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src={src}
      alt={title} className="w-full h-full object-cover"/>
      

  </figure>
  <div className="hide hover:show card-body">
    <h2 className="card-title ml-16 text-2xl"> {title}</h2>
    <p className='ml-7'>{description}</p>
    <div className="card-actions flex justify-between items-center">
    <button className="btn bg-orange-500 text-white hover:bg-red-500">
              Source
    </button>
    <button className="btn btn-primary hover:bg-red-500">Demo</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProjectCard;

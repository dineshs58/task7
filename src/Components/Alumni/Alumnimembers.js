import React from 'react'
import './alumni.css'
import img from './Alumniimages';
const Alumnimembers = () => {
    return (
        <div className="container-fluid alumnimember_conta">
            <div className="row alumnimember_row">


                {img.map((items) => {
                    const { id, image,title,subtitle,content } = items
                    return (
                        <div className="col-sm-4 mx-2 mt-4 alumnimember_col" key={id}>
                            <div className="card-item">
                                
                                <img src={image} alt="" srcset="" />
                                <h3 className='mt-1'>{title}</h3>
                                <h6>{subtitle}</h6>
                                <p>{content}</p>
                            </div>

                        </div>
                    )

                })

                }
            </div>
        </div>
    )
}

export default Alumnimembers
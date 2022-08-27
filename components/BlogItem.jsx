import React from 'react';
import Parser from 'html-react-parser';
import Link from 'next/link';

import Image from 'next/image'

const Item = ({title, description, id, image_url}) => {
    // console.log(image_url)
    return(
        <article data-id={id} className ='post'>
            <Link href='/blog/[id]' as={`/blog/${id}`}>
             <a>
                <img
                
                src={image_url}
                alt={title}
                title={title}
                width="100%"
                height="auto"
                />
                </a>
            </Link>
            <h3>{title}</h3>
            <div> {Parser(description)}</div>
            <Link href='/blog/[id]' as={`/blog/${id}`}>
                Nayel
            </Link>


            <style  jsx>{`
                        .post {
                        width: 292px;
                        padding: 4px;
                        }
                    
                    `}</style>
        </article>
    );
}




export default Item;
import React from 'react';
import Parser from 'html-react-parser';
import Head from 'next/head'
import Header from '../../components/Header';



const SinglePost = ({ post }) => {
    let description = post.content.rendered;

    if(!post){
        console.log('Error')
    }
    return(
        <>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Header/>

            <div post-id={post.id} className="content">

                <h1>{post.title.rendered}</h1>
                <hr/>
                <div>{Parser(description)}</div>
            
            </div>

           
            <style global jsx>{`
                .alignright {
                  float: left;
                }
                .content {
                  
                  padding: 20px;
                }
              `}</style>

            
     

        </>
       
    )
}


export const getServerSideProps = async ({query}) => {
    console.log(process.env.apiUrl);
    const data = await fetch(`https://www.thegamblest.com/wp-json/wp/v2/posts/${query.id}`)
    const post = await data.json()

    return {props:{post}}
}

export default SinglePost;
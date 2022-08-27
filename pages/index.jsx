import Head from 'next/head'

import axios from 'axios';

import Item from "../components/BlogItem"

import Header from '../components/Header';







export default function Home({ datas, error }) {
  // console.log(datas[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url)

  if (error) {
    return (<div>An error occured: {error.message}</div>);
  }
  return (
   <> 
    <div>
      
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Header />

      <section className ='posts'>
      {datas.map(data => (
        
        <Item key={data.id} title={data.title.rendered} id={data.id} description={data.excerpt.rendered}  image_url={data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}
        />
       
      ))}
      </section>



      <style  jsx>{`
        .posts {
          display:flex;
          flex-wrap:wrap;
        } 
       
      `}</style>
     
    </div>


   </>
  );
 
}

Home.getInitialProps = async () => {
  try {
    const res = await axios.get('https://www.thegamblest.com/wp-json/wp/v2/posts/?_embed&per_page=20');
    const datas = res.data;
    return { datas };
  } catch (error) {
    return { error };
  }
};


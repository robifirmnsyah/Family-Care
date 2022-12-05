import React from 'react'
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore'



export default function ArticleList() {
    const [article, setArticle] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const articlesCollectionRef = collection(db, "article")
            const data = await getDocs(articlesCollectionRef)
            setArticle(data.docs.map(doc => ({...doc.data(), id:doc.id})))
        }
        console.log(article)
        getData()
    },[])
    // article.map((articles) =>{
    //     return (articles.title)
    // })
  return (
    <div>
        <button onClick={()=>setArticle({title:'bakso'})}>ubah</button>
        {/* {article.map((articles) =>{
            return (<div key={articles.id}> 
                <h1>{articles.title}</h1>
                <p>{articles.body}</p>
                <img src={articles.img} alt='' />
                <p>Category : {articles.img}</p>
                <p>Category : {articles.category}</p>
                </div>)
        })} */}
    </div>
  )
}

import React from "react";
import { useState, useEffect } from "react";
import  '../styles/ArticleList.css'
import {Link} from 'react-router-dom'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ArticleCard from "./ArticleCard";
export default function ArticleList() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const articlesCollectionRef = collection(db, "article");
      const data = await getDocs(articlesCollectionRef);
      setArticle(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('loop')
    };
    getData();
    
  }, []);

  return (
    <>
    <main className="articleList">
    <h1>Article List</h1>
    <section className="articleList__section">
      {article.map((articles) => {
        
        return (
            <ArticleCard article={articles}/>
           
          
        );
      })}
    </section>
    </main>
    </>
  );
}

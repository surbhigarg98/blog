import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

   public allBlogs = [
    {
      "blogId": "1",
      "created": "2017-10-20T12:20:47.8542",
      "admin": "author",
      "category": "comedy",
      "tags": [],
      "isPublished": true,
      "bodyHtml": "<h1>this is a full body</h1> <p>this is all about it</p>",
      "description": "this is the description of blog 1",
      "title": "this is blog 1"
    },
    {

      "blogId": "2",
      "created": "2017-10-21T21:47:51.6782",
      "admin": "author",
      "category": "comedy",
      "tags": [],
      "isPublished": true,

      "bodyHtml": "<h>this is big text</h><p>this is smal text</p>",
      "description": "this is the description of blog 2",
      "title": "this is blog 2"
    },
    {

      "blogId": "3",
      "created": "2017-11-14T14:15:54.4072",
      "admin": "author",
      "category": "comedy",
      "tags": [],
      "isPublished": true,

      "bodyHtml": "this is a full body",
      "description": "this is the description of blog 1",
      "title": "this is blog 3"
    }
  ]
  public currentBlog:any;

  
  constructor() {
    console.log('service constructor is called')
   }


public getAllblogs():any {
  return this.allBlogs;


}


  public getSingleBlogInformation(currentBlogId: string): any {
    for(let blog of this.allBlogs){
      if(blog.blogId ==currentBlogId){
        this.currentBlog=blog;
        
    console.log(this.currentBlog)
    return this.currentBlog;
      }
    }
  
  }


}
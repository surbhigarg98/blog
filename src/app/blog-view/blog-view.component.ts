import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{ BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import{Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog:any;
 

  constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService,public blogHttpService:BlogHttpService,private toastr: ToastrService, private location:Location) {


   }

  ngOnInit() {
  console.log('blog view ngOnIt Called')
  let myBlogId=this._route.snapshot.paramMap.get('blogId') ;
  this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
    data=>{
      console.log(data)
      this.currentBlog=data["data"]
      
    },
    error=>{
      console.log('error occured')
      console.log(error.errorMessage)
    }
  )
 console.log(this.currentBlog);
  
}
public deleteThisBlog(){
  this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
    data=>{
      console.log(data)
      this.toastr.success('Blog deleted successfully', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/home']);
      },2000)
      
    },
    error=>{
      console.log('error occured')
      console.log(error.errorMessage)
      this.toastr.error('Some error occured', 'Oops!');
    }
  )

}
public goBackToPreviosPage(){
  this.location.back();
}

  ngOnDestroy(){
  console.log("blog view gets destroyed");
  }


  

}

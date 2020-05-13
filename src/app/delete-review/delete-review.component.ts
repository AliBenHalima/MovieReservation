import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-review',
  templateUrl: './delete-review.component.html',
  styleUrls: ['./delete-review.component.css']
})
export class DeleteReviewComponent implements OnInit {
  message;
  messageClass;
  foundBlog = false;
  processing = false;
  Comment;
  currentUrl;
  url ; 
  constructor(public blogservice : BlogService,private _route: ActivatedRoute, private location: Location,private router: Router) { }

  ngOnInit(): void {


    this._route.paramMap.subscribe((params: ParamMap) => {
      this.url=this._route.snapshot.params['id'] ;
      this.blogservice.getSingleComment(this.url).subscribe((data: any) => {
       

    if (!data.success) {
      this.messageClass = 'alert alert-danger'; // Return bootstrap error class
      this.message = data.message; // Return error message
    } else {
      
      console.log(data);
      this.Comment = data.blog;
      // Create the blog object to use in HTML
      this.Comment = {
        title: data.blog.title, // Set title
        body: data.blog.body, // Set body
        createdBy: data.blog.createdBy, // Set created_by field
        createdAt: data.blog.createdAt // Set created_at field
      }
      this.foundBlog = true; // Displaly blog window
    }
  }
      )});

}

goBack() {
  this.location.back();
}

deleteComment() {
 
  // Function for DELETE request
  console.log(this.url);
    this.blogservice.deleteComment(this.url).subscribe((data:any) => {
    
    // Check if delete request worked
    if (!data) {
      this.messageClass = 'alert alert-danger'; // Return error bootstrap class
      this.message = data.message; // Return error message
    } else {
      this.messageClass = 'alert alert-success'; // Return bootstrap success class
      this.message = data.message; // Return success message
      // After two second timeout, route to blog page
      setTimeout(() => {
        this.router.navigate(['/']); // Route users to blog page
      }, 2000);
    }
  });

}
}

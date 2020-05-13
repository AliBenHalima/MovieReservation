import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-reviews',
  templateUrl: './edit-reviews.component.html',
  styleUrls: ['./edit-reviews.component.css']
})
export class EditReviewsComponent implements OnInit {

  constructor(public blogservice : BlogService,private _route: ActivatedRoute, private location: Location) { }
message ;
Comment ; 
messageClass;
// loading = true;

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.blogservice.getSingleComment(this._route.snapshot.params['id']).subscribe((data: any) => {
       
        console.log(data);
        this.Comment = data.blog;
        
        // else{
        //   this.loading = false ; 
        //   this.message = "404 Comment not Found ";
        // }
    });});

  

}
// GO back Function 
goBack() {
  this.location.back();
}

//Update function 
updateBlogSubmit() {
 
  this.blogservice.editComment(this.Comment).subscribe(data => {
    // Check if PUT request was a success or not
    if (!data.success) {
      this.messageClass = 'alert alert-danger'; // Set error bootstrap class
      this.message = data.message; // Set error message
      // this.processing = false; // Unlock form fields
    } else {
      this.messageClass = 'alert alert-success'; // Set success bootstrap class
      this.message = data.message; // Set success message
      // After two seconds, navigate back to blog page
      setTimeout(() => {
        this.goBack()  // Navigate back to route page
      }, 2000);
    }
  });
}


 }

import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @Input() postData:any = { post_desc: '', post_data:Date.now };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getPost(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.postData = data;
    });
  }

  updatePost() {
    this.rest.updatePost(this.route.snapshot.params['id'], this.postData).subscribe((result) => {
      this.router.navigate(['/post-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
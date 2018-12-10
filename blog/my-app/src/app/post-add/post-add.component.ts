import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  @Input() postData = { post_desc: '', prod_data: Date.now };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addPost() {
    this.rest.addPost(this.postData).subscribe((result) => {
      this.router.navigate(['/post-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
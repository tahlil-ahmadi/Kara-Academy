import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseId: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(parameters=> {
      this.courseId = parameters['id'];
    });
  }

}

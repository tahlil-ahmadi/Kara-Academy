import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  model: Array<Course>;
  constructor(private service: CourseService,
              private router: Router) {

    service.getAll().subscribe(a=>{
      this.model = a;
    });
  }

  edit(item: Course) {
    this.router.navigate(['/course', item.id]);
  }
}

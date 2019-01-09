import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  model: Course;

  constructor(private route: ActivatedRoute,
              private service: CourseService, 
              private router: Router) {

  } 

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      const courseId = parameters['id'];
      this.service.getById(courseId).subscribe(a => {
        this.model = a;
      })
    });
  }

  save() {
    //TODO: save the data

    this.router.navigate(['/course-list']);
  }
}

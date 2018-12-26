import { Component, OnInit, Output, Input } from '@angular/core';
import { CourseCategory } from '../shared/course-category.model';
import { CourseCategoryService } from '../shared/course-category.service';
import { DialogRef } from '@progress/kendo-angular-dialog';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {
 

  @Input() public id:number;
  public model: CourseCategory;

  constructor(private service: CourseCategoryService, 
              private dialog: DialogRef) { 
    this.model = new CourseCategory();
  }
  ngOnInit(): void {
    if (this.id){
      this.service.getById(this.id).subscribe(response=> {
        this.model = response;
      })
    }
  }

  save() {
    this.service.save(this.model).subscribe(a=>{
      this.dialog.close(true);
    }, a=> {
      alert("error happened");
    });
  }
}

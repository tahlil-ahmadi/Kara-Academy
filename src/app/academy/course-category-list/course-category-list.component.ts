import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../shared/course-category.model';
import { Observable, of } from 'rxjs';
import { CourseCategoryService } from '../shared/course-category.service';
import { DialogService } from '@progress/kendo-angular-dialog';
import { CourseCategoryComponent } from '../course-category/course-category.component';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
  styleUrls: ['./course-category-list.component.css']
})
export class CourseCategoryListComponent {

  public model: Array<CourseCategory>;

  constructor(private service: CourseCategoryService,
              private dialogService: DialogService) { 
    this.model = service.loadCourseCategories();
  }

  hasChildren(node: CourseCategory): boolean {
    return node.children && node.children.length > 0;
  }

  loadChildren(node: CourseCategory): Observable<Array<CourseCategory>> {
    return of(node.children);
  }

  addRoot() { 
    const dialogRef = this.dialogService.open({
      title: 'Add Root',
      content: CourseCategoryComponent,
    });
  }


  addChild(parent: CourseCategory) { }
  delete(node: CourseCategory){ }
  edit(node: CourseCategory) { }
}

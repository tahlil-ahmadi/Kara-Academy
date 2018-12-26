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
export class CourseCategoryListComponent implements OnInit {
  

  public model: Array<CourseCategory>;

  constructor(private service: CourseCategoryService,
              private dialogService: DialogService) { 
    // this.model = service.loadCourseCategories();
  }
  ngOnInit(): void {
    this.refresTree();
  }
  private refresTree() {
    this.service.loadAll().subscribe(a => this.model = a);
  }

  hasChildren(node: CourseCategory): boolean {
    return node.children && node.children.length > 0;
  }

  loadChildren(node: CourseCategory): Observable<Array<CourseCategory>> {
    return of(node.children);
  }

  addRoot() { 
    this.openDialog(null);
  }

  addChild(parent: CourseCategory) { }

  delete(node: CourseCategory) {
    if (confirm('are you sure ?')){
      this.service.delete(node.id).subscribe(a=> this.refresTree());
    }
  }

   edit(node: CourseCategory) { 
    this.openDialog(node.id);
  }

  private openDialog(id: number) {
    const dialogRef = this.dialogService.open({
      title: 'Add Root',
      content: CourseCategoryComponent,
    });
    dialogRef.content.instance.id = id;
    dialogRef.result.subscribe(result => {
      if (result)
        this.refresTree();
    });
  }
}

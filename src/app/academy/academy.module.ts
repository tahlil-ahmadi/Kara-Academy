import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GridModule } from '@progress/kendo-angular-grid';

import { CourseCategoryListComponent } from './course-category-list/course-category-list.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseCategoryService } from './shared/course-category.service';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ACADEMY_ROUTES } from './academy.routes';
import { CourseService } from './shared/course.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ACADEMY_ROUTES),
    TreeViewModule,
    ButtonModule,
    DialogModule,
    GridModule
  ],
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent,
    CourseComponent,
    CourseListComponent
  ],
  providers:[
    CourseCategoryService,
    CourseService
  ]
})
export class AcademyModule { }

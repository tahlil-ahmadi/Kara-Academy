import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { CourseCategoryListComponent } from './course-category-list/course-category-list.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseCategoryService } from './shared/course-category.service';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';

const appRoutes: Routes = [
  { path: 'course-category-list', component: CourseCategoryListComponent },
  { path: 'course-category',      component: CourseCategoryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

    TreeViewModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent
  ],
  providers:[
    CourseCategoryService
  ]
})
export class AcademyModule { }

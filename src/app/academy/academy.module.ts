import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseCategoryListComponent } from './course-category-list/course-category-list.component';
import { CourseCategoryComponent } from './course-category/course-category.component';

const appRoutes: Routes = [
  { path: 'course-category-list', component: CourseCategoryListComponent },
  { path: 'course-category',      component: CourseCategoryComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent
  ]
})
export class AcademyModule { }

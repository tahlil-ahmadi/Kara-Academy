import { Routes } from "@angular/router";
import { CourseCategoryListComponent } from "./course-category-list/course-category-list.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseComponent } from "./course/course.component";

export const ACADEMY_ROUTES: Routes = [
    { path: 'course-category-list', component: CourseCategoryListComponent },
    { path: 'course-list',      component: CourseListComponent },
    { path: 'course/:id',      component: CourseComponent },
];
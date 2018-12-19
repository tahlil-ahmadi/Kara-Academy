import { CourseCategory } from "./course-category.model";

export class Course {
    category: CourseCategory;

    constructor(public id: number, public title: string, public instructor: string){

    }
}
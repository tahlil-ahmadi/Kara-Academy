import { Course } from "./course.model";


export class CourseService {
    
    getAll(): Array<Course> {
        let output = new Array<Course>();
        output.push(new Course(1, 'ASP.NET MVC', 'Jack'))
        output.push(new Course(2, 'Spring Boot', 'Sarah'))
        return output;
    }
}
import { Course } from "./course.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseService {
    
    constructor(private httpClient:HttpClient) {
        
    }

    getAll(): Observable<Array<Course>> {
        //TODO: remove hard-coded url
       return this.httpClient.get<Array<Course>>('http://localhost:3000/courses');
    }

    getById(id: number) : Observable<Course> {
       return this.httpClient.get<Course>('http://localhost:3000/courses/' + id);
    }
}
import { CourseCategory } from "./course-category.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseCategoryService {

    private  baseUrl = "http://localhost:3000/coursecategories/";
    constructor(private http: HttpClient) { }

    loadAll() : Observable<Array<CourseCategory>> {
      // let output = new Array<CourseCategory>();
      // output.push(new CourseCategory(1,'programming'));
      // output.push(new CourseCategory(2, 'network'));
      // const child = new CourseCategory(3,'Web Programming');
      // output[0].children.push(child);
      // return output;
      return this.http.get<Array<CourseCategory>>(this.baseUrl);
    }

    save(category: CourseCategory) : Observable<any> {
      if (category.id)
        return this.http.put(this.baseUrl + category.id, category);
      else
        return this.http.post(this.baseUrl, category);

    }

    getById(id: number) : Observable<CourseCategory> {
      return this.http.get<CourseCategory>(this.baseUrl + id);
    }

    delete(id: number){
      return this.http.delete(this.baseUrl + id);
    }
}
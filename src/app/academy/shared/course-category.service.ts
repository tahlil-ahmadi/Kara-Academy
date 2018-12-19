import { CourseCategory } from "./course-category.model";

export class CourseCategoryService {

    loadCourseCategories() : Array<CourseCategory> {
      let output = new Array<CourseCategory>();
      output.push(new CourseCategory(1,'programming'));
      output.push(new CourseCategory(2, 'network'));
      const child = new CourseCategory(3,'Web Programming');
      output[0].children.push(child);
      return output;
    }
}
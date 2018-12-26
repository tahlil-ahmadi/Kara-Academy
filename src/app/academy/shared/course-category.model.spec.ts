import { CourseCategory } from "./course-category.model";


describe('course category model', ()=>{

    it('should return fullDescription properly', () =>{
        const model = new CourseCategory();
        model.title = "title";
        model.description = "description";
        const expected = "title - description";
        
        const actual = model.fullDescription();

        expect(expected).toBe(actual);
    });

});
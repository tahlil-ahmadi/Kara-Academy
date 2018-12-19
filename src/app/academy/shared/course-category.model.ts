export class CourseCategory {
    id: number;
    title: string;
    children: Array<CourseCategory>;   

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.children = new Array<CourseCategory>();
    }
}
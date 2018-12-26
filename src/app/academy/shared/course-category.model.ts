export class CourseCategory {
    id: number;
    title: string;
    description: string;
    children: Array<CourseCategory>;   

    fullDescription() : string {
        return `${this.title} - ${this.description}`
    }
}
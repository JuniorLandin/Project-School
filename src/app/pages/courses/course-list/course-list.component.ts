import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  public courseList: Course[] = [];

  constructor(
    private courseService: CoursesService
  ) {}

  ngOnInit() {
    this.getCourses
  }

  public getCourses(): void{
    this.courseService.getCourses().subscribe((response: Course[]) => {
      this.courseList = response;
      console.log(response)
    })
  }

}

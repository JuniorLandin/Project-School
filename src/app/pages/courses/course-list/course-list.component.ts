import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { Category, Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  public courseList: Course[] = [];

  public totalCount: number = 0;
  public currentPage:number = 1;
  public pageSize: number = 5;

  public categoryList = Object.values(Category)
  public form!: FormGroup


  constructor(
    private courseService: CoursesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.validation()

    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      if(value) {
        this.getCourses(
          this.currentPage, 
          this.pageSize, 
          this.f.category.value ?? '', 
          this.f.search.value ?? ''
          )
      }
    })
    this.getCourses(1, 5, '', '')
  }

  get f(): any{
    return this.form.controls
  }

  private validation(): void{
    this.form = this.fb.group({
      category: [''],
      search: ['']
    })
  }

  
  public getCourses(currentPage: number, pageSize: number, category: string, search: string): void{
    this.courseService
    .getCourses(currentPage, pageSize, category, search)
    .subscribe((response: HttpResponse<any>) => {
      this.courseList = response.body as Course[];
      let totalCount = response.headers.get('X-Total-Count')
      this.totalCount = totalCount ? Number(totalCount) : 0
      console.log(response)
    })
  }
  
  public doSearch(): void{
    this.getCourses(
      this.currentPage, 
      this.pageSize, 
      this.f.category.value ?? '', 
      this.f.search.value ?? ''
      )
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1)
    this.pageSize = e.pageSize
    this.getCourses(
      this.currentPage, 
      this.pageSize, 
      this.f.category.value ?? '', 
      this.f.search.value ?? ''
      )
  }
}

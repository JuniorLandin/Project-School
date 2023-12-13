import { Injectable, inject } from '@angular/core';
import { enviroments } from '../../enviroments/enviroments';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  baseUrl = enviroments.baseURL
  urlCourses = `${enviroments.baseURL}/courses`

  private http = inject(HttpClient)

  public getCourses(currentPage: number, pageSize: number, category: string, search: string): Observable<HttpResponse<any>> {
    let url = `${this.urlCourses}?_page=${currentPage}&_limit=${pageSize}`
      if(search)
        url = `${url}&q=${search}`
      if(category)
        url = `${url}&category=${category}`
    return this.http.get<HttpResponse<any>>(`${url}`, {observe: 'response'}).pipe(take(1))
  }

  public getCourseByID(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.urlCourses}/${id}`)
  }

  public postCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.urlCourses}/`, course)
  }

  public putCourseByID(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.urlCourses}/${id}/`, course)
  }
  

  public deleteCourseByID(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.urlCourses}/${id}`)
  }

}

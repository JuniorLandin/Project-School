import { Injectable, inject } from '@angular/core';
import { enviroments } from '../../enviroments/enviroments';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, take, throwError } from 'rxjs';
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
    return this.http.get<HttpResponse<any>>(`${url}`, {observe: 'response'})
    .pipe(
      take(1),
      catchError(this.handleError)
      )
  }

  public getCourseByID(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.urlCourses}/${id}`)    
    .pipe(
      take(1),
      catchError(this.handleError)
      )
  }

  public postCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.urlCourses}/`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
      )
  }

  public putCourseByID(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.urlCourses}/${id}/`, course)
    .pipe(
      take(1),
      catchError(this.handleError)
      )
  }
  

  public deleteCourseByID(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.urlCourses}/${id}`)
    .pipe(
      take(1),
      catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if(err.error instanceof ErrorEvent) {
      errorMessage = `Um erro ocorreu ${err.error.message}`
    } else {
      errorMessage = `Backend return: ${err.status}: ${err.message}`
    }
    console.log(err)
    return throwError(() => errorMessage)
  }

}

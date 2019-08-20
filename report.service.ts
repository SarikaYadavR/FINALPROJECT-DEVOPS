import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from './data/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private static readonly FORM_PAGE_URL = "http://localhost:3200/form/";
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  getFormPage(language : string): Observable<Report>{
    return this.http.get<Report>(ReportService.FORM_PAGE_URL + language);
  }

}

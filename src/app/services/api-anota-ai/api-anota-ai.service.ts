import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiAnotaAiService {
  private URL: string =
    'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/';
  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.URL + endpoint);
  }

  public postData(endpoint: string, body: any) {
    return this.http.post(this.URL + endpoint, body);
  }

  public deleteData(endpoint: string, item: any) {
    return this.http.delete(this.URL + endpoint + item);
  }

  updateData(endpoint: string, data: any) {
    return this.http.put(this.URL + endpoint, data);
  }
}

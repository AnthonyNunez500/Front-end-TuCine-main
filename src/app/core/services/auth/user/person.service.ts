import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/core/models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public personsList:Person[]=[]
  private apiURL="http://localhost:8080/api/TuCine/v1/persons"
  constructor(private http: HttpClient) {
    this.getPersons()
   }
   public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiURL);
  }

  public getPersonById(id: any): Observable<Person> {
    return this.http.get<Person>(`${this.apiURL}/${id}`);
  }

/*   public searchPersons(title: string, persons: Person[]): Person[] {

    return persons.filter(person => person.firstName.toLowerCase().includes(title.toLowerCase()));
  } */

  public get(url:string){
    return this.http.get(url); //Get host

  }
}





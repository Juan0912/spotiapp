import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-ejemplo',
  templateUrl: './http-ejemplo.component.html',
  styleUrls: ['./http-ejemplo.component.css']
})
export class HttpEjemploComponent implements OnInit {

  paises : any[] = [];

  constructor( private http: HttpClient ) {

    console.log('Constructor del Home hecho');
    

    this.http.get('https://restcountries.com/v3.1/lang/spa')
          .subscribe( (respuesta: any) => {
            this.paises = respuesta;
            console.log(respuesta);
            
          });

   }

  ngOnInit(): void {
  }

}

import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class BCRAService {
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor(private http: HttpClient) {
    console.log("Servicio HTTP")

   }


   getBcra(): any {
    const tokenBCRA = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk1MzUyNTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlX2p1ZHRAaG90bWFpbC5jb20ifQ.F8s_qkjywN9VpzCMWDNUhcGw1q-WkruJk6CPPvLKYM37kl4XO8PQ20dPmjwTJHymsnOUK_9XsSohxUHc3RUeFA' ;
    
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `BEARER ${tokenBCRA}`,
    });

    return this.http.get("https://api.estadisticasbcra.com/usd_of", { headers: headers });

   }

} 	 

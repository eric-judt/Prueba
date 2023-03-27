import { Subscription } from 'rxjs';
import { Component, OnInit, Pipe } from '@angular/core';
import { BCRAService } from './services/bcra.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba';


  constructor(private bcraService: BCRAService) {
    console.log('componente creado');
  }


  ngOnInit(): void{
    console.log('el componente se inicializo');
    this.bcraService.getBcra()
     .subscribe((response: any)  => console.log(Response));
  }

}



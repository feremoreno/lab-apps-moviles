import { Component, OnInit, OnDestroy } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {

  user: Personaje = {};
  list: Personaje[]= [];
  personajes: Personaje[]= [];
  subcriptionObject: Subscription = new Subscription;
  subcriptionObjectList: Subscription = new Subscription;

  constructor(private envioReceptorService: EnvioReceptorService) { }

  ngOnInit() {
    this.envioReceptorService.$getObjectSource.subscribe(data => {
      console.log(data);
      this.user = data;
    }
    ).unsubscribe();

    this.envioReceptorService.$getListSource.subscribe(data => {
      console.log(data);
      this.list = data;
    }).unsubscribe();


    this.envioReceptorService.getPersonajes().subscribe((response: any) => {
      this.personajes = response.results;

    });
  }

}

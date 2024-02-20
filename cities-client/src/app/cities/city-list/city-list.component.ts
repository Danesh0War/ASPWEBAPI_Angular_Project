import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from '../../models/city.model';
import { CitiesService } from '../cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit{
  cities$?:Observable<CityModel[]>; //no need to hold server data if we only need to display it (async pipe)


  constructor(private citiesService: CitiesService, private router:Router){
  }

  ngOnInit(): void {
    this.cities$ = this.citiesService.getCities();
  }
  
  RedirectToCityAdd(): void{
    this.router.navigate(['/cities/new'])
  }

}

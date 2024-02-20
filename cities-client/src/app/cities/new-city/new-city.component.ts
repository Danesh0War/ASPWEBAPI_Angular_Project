import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitiesService } from '../cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-city',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-city.component.html',
  styleUrl: './new-city.component.css'
})
export class NewCityComponent {
  cityForm:FormGroup;

  constructor(private citiesService:CitiesService, private router:Router, private FormBuilder:FormBuilder){
    this.cityForm = this.FormBuilder.group({
      name: ['', [ //client-side validations
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
         Validators.pattern('[a-zA-Z]*')
        ]],
      numberOfPeople: ['', [
        Validators.required,
         Validators.pattern('^[1-9][0-9]*$')]]
    });
  }

  onFormSubmit(){
    this.citiesService.addCity(this.cityForm.value)
    .subscribe(() => {
      this.router.navigate(['/cities']);
    })
  }
  

}

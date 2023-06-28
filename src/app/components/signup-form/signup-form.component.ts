import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { SignupService } from '../../services/signup.service';
import { SignupData } from '../../models/signup-data.model';
import { Country } from 'src/app/models/country.model';
import { State } from 'src/app/models/state.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username: string;    
  email: string;       
  country: number;     
  state: number; 
  phoneNumber: number;
  password: string = '';
  passwordConfirm: string = '';
  countries: Country[] = [];
  states: State[] = [];

  @Output()
  save = new EventEmitter<SignupData>();

  constructor(private countriesService: CountriesService, private signupService: SignupService, private router: Router) {
  }

  submit(form: NgForm) {
    if (form.valid) {
      this.signupService.saveData(form.value).subscribe(() => {debugger;
        this.router.navigate(['/signup-details']);
      });
    }
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  onCountryChange(countryId: number) {
    this.state = null; // Clear state selection
    this.countriesService.getStates(countryId).subscribe(states => {
      this.states = states;
    });
  }
}

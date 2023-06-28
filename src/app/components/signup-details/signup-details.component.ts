import { Component, OnInit } from '@angular/core';

import { SignupData } from '../../models/signup-data.model';
import { SignupService } from 'src/app/services/signup.service';

@Component({
    selector: 'signup-details',
    templateUrl: './signup-details.component.html'
})
export class SignupDetailsComponent implements OnInit {
    signupData: SignupData;

    constructor(
        private signupService: SignupService
    ) {

    }

    ngOnInit() {
        this.signupService.getData().subscribe(data => {
            this.signupData = data;
          });
    }
}

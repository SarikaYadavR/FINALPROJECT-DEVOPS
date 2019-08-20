import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.css']
})
export class OnboardingFormComponent implements OnInit {
  public language : string;
  public errorMsg;
  constructor(private reportService : ReportService) { }

  ngOnInit() {
  }
   formPage(){
     this.reportService.getFormPage(this.language).subscribe(data => console.log(data),
          error => {this.errorMsg = error.error.message;
          console.log(error.error.message);
        });
   }
  }
  
////

    <div class="row">
      <div class="col-md-2"><label>Country:</label> </div>
      <div class="col-md-4">
          <select [(ngModel)]="selectedCountry.id" (change)="onSelect($event.target.value)">
              <option value="0">--Select--</option>
              <option *ngFor="let country of countries" value= {{country.id}}>{{country.name}}</option>
            </select>
      </div>
      <div class="col-md-2"><label>State:</label></div>
      <div class="com-md-4"><select>
          <option value="0">--Select--</option>
          <option *ngFor="let state of states " value= {{state.id}}>{{state.name}}</option>
        </select></div>
    </div>
	
	
	
    <div class="row">
        <div class="col-md-2"><label>Code Base</label></div>
        <div class="col-md-4">
                <div class="form-group">
                        
                        <p-dropdown
                          [options]="codeBase"
                          [(ngModel)]="selectedCodeBase"
                          name="codebase"
                          required="required"
                          #cBaseNew="ngModel"
                        ></p-dropdown>
                      </div>
        </div>
        <div class="col-md-2"><label>Test</label></div>
        <div class="col-md-4">
                <div class="form-group">
                        
                        <p-dropdown
                        [options]="appType"
                        [(ngModel)]="selectedAppType"
                        name="appType"
                        required="required"
                        #cBaseNew123="ngModel"
                      ></p-dropdown>
                      </div>
        </div>
    </div>

//Add install
npm install --save font-awesome angular-font-awesome

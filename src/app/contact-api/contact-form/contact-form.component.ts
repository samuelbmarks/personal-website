import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm!: FormGroup

  constructor (private fb: FormBuilder) {}
  
  ngOnInit (): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl,
      phoneNumber: new FormControl(),
      phoneType: new FormControl(),
      preferredContact: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    });


    // this.contactForm = this.fb.group ({
    //   firstName: [null, [Validators.required]],
    //   lastName: [null, [Validators.required]],
    //   email: [null, [Validators.required, Validators.pattern("^[a-z0-9")]],
    //   phoneNumber: [null, [Validators.required]],
    //   phoneType: [null, [Validators.required]],
    //   preferredContact: [null, [Validators.required]],
    //   subject: [null, [Validators.required]],
    //   message: [null, [Validators.required]]
    // });
  }
  
  saveDetails(form: FormGroup) {
    alert ('Request Sent!\n\n' + JSON.stringify(form.value, null, 4));
  } 
}
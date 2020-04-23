import { Component, OnInit } from '@angular/core';
import { userInterface } from './../../userInterface';
import { userfeedback } from './../../userImp';

@Component({
  selector: 'app-testimonial-component',
  templateUrl: './testimonial-component.component.html',
  styleUrls: ['./testimonial-component.component.css'],
})
export class TestimonialComponentComponent implements OnInit {
  newuser: userInterface[];
  userfeedback: any = {};
  constructor() {}

  ngOnInit(): void {
    this.newuser = userfeedback;
  }

  adduser(userfeedback): any {
    console.log('Add new user');
    this.newuser.unshift(userfeedback);
  }
}

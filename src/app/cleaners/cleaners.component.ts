import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaners',
  templateUrl: './cleaners.component.html',
  styleUrls: ['./cleaners.component.css']
})
export class CleanersComponent implements OnInit {

  cleaner: Cleaner = {
    id: 1,
    name: 'John Doe'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

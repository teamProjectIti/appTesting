import { Component, OnInit } from '@angular/core';
import { Call } from '../../Model/Call';
import { CallApiService } from 'src/app/Services/call-api.service';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
 })
export class CallListComponent implements OnInit {
  calls: Call[] = [];

  constructor(private callListService:CallApiService ) {}

  ngOnInit(): void {
    this.callListService.getProducts().subscribe((res) => {
      this.calls = res;
      console.log(res);
    });
  }
}

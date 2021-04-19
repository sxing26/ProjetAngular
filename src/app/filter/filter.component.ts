import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface SearchParams{
  name: string;
  status: string;
  alive: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
    search = new EventEmitter<SearchParams>();

  searchForm = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(''),
    alive: new FormControl(false),
  });

  constructor() {}

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value) => {
        this.search.emit(value);
      });
  }

}

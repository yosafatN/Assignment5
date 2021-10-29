import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  @Output() clickCardListener = new EventEmitter<number>()
  @Input() countries: Country[] = []
  sortPopulation: Country[] = []
  sortArea: Country[] = []
  sortGDP: Country[] = []

  ngOnInit(): void {
    let temp = this.countries
    temp.sort((a,b) => a.population > b.population ? -1 : a.population < b.population ? 1 : 0)

    for (let i = 0 ; i < 3 ; i++) {
      this.sortPopulation.push(temp[i])
    }

    temp = this.countries
    temp.sort((a,b) => a.area > b.area ? -1 : a.area < b.area ? 1 : 0)

    for (let i = 0 ; i < 3 ; i++) {
      this.sortArea.push(temp[i])
    }

    temp = this.countries
    temp.sort((a,b) => a.gdp > b.gdp ? -1 : a.gdp < b.gdp ? 1 : 0)

    for (let i = 0 ; i < 3 ; i++) {
      this.sortGDP.push(temp[i])
    }
  }

  clickCard(id: number) {
    this.clickCardListener.emit(id)
  }
}

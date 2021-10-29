import { Component, Inject } from '@angular/core';
import { Country } from './models/Country';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryDetailComponentComponent } from './components/country-detail-component/country-detail-component.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public countryDialog: MatDialog) {}
  
  title = 'CountryApp';
  isHomePage = true

  countries: Country[] = [
    {
      id: 1,
      name: "United States",
      capital: "Washington, D.C.",
      area: 9525067,
      population: 325365189,
      gdp: 18569100,
      currency: "United States Dollar"
    },
    {
      id: 2,
      name: "China",
      capital: "Beijing",
      area: 9596961,
      population: 1427647786,
      gdp: 14722730,
      currency: "Renminbi"
    },
    {
      id: 3,
      name: "Japan",
      capital: "Tokyo",
      area: 377974,
      population: 125360000,
      gdp: 5064873,
      currency: "Japanese Yen"
    },
    {
      id: 4,
      name: "Russia",
      capital: "Moskow",
      area: 17125191,
      population: 146793744,
      gdp: 1483497,
      currency: "Russian Rubel"
    },
    {
      id: 5,
      name: "Canada",
      capital: "Ottawa",
      area: 9984670,
      population: 35151728,
      gdp: 1483497,
      currency: "Canadian Dollar"
    }
  ]

  getCountryByID(id: number) : Country {
    return this.countries.find(country => country.id == id)!
  }

  cardClicked(id: number) {
    let dataCountry = this.getCountryByID(id)
    
    const dialogConfig = new MatDialogConfig()
    dialogConfig.closeOnNavigation = true
    dialogConfig.id = "CountryDialog"
    dialogConfig.data = dataCountry
    const dialog = this.countryDialog.open(CountryDetailComponentComponent, dialogConfig)
  }

  buttonClick () {
    this.isHomePage = !this.isHomePage
  }

  getButtonText() {
    if (this.isHomePage) {
      return 'List of All Country'
    }
    else {
      return 'Go Back To Home Page'
    }
  }
}
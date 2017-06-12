import { Component } from '@angular/core';
import { Category } from './models/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [new Category('Breakfast'), new Category('Lunch'), new Category('Drinkct')];

  receivedDish(pdish) {
    for (var i = 0; i < this.categories.length; i++) {

      if (this.categories[i].getName() === pdish.getCatName()) {

        this.categories[i].dishes.push(pdish);


      }

    }

  }

}

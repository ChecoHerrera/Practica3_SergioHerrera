import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../models/Dish';

@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.css']
})
export class NewDishFormComponent {
  name = '';
  price = '';
  description = '';
  category = '';
  @Input() categories;
  @Output() sendDish = new EventEmitter();
  dishTemp = '';
  
  onAddDish() {
    
    var dish = new Dish(this.name, this.price, this.description, this.category);
    this.sendDish.emit(dish);

  }

  onDescriptionEnter(event) {
    this.description = event.target.value;
  }


  onNameEnter(event) {
    this.name
      = event.target.value;
  }


  onPriceEnter(event) {
    this.price = event.target.value;
  }


  onCategorySelect(event) {
    this.category = event.target.value;

  }

}



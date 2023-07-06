import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string): Foods[]{
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
    // if(tag == "All")
    // return this.getAll()
    
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Foods[]{
    return [
      // '/assets/chicken-steak.jpg',
      // '/assets/fish-vegetables.jpg',
      // '/assets/pasta-meatballs.jpg',
      // '/assets/pork-hock.jpg',
      // '/assets/pasta-tomato.jpg',
      // '/assets/salad-chicken.jpg',
      // '/assets/meat-dish.jpg',
      // '/assets/skewers.jpg',

      {
        id: 1,
        price: 10,
        name: 'Chicken Steak',
        favorite: true,
        star: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/chicken-steak.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },

      {
        id: 2,
        price: 20,
        name: 'Fish Vegetables',
        favorite: true,
        star: 3,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/fish-vegetables.jpg',
        cookTime: '10-15',
        origins: ['egypt'],
      },

      {
        id: 3,
        price: 15,
        name: 'Pasta Meatballs',
        favorite: false,
        star: 3,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/pasta-meatballs.jpg',
        cookTime: '20-25',
        origins: ['italy'],
      },

      {
        id: 4,
        price: 40,
        name: 'Pork Hock',
        favorite: false,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/pork-hock.jpg',
        cookTime: '20-30',
        origins: ['italy'],
      },

      {
        id: 5,
        price: 15,
        name: 'Pasta Tomato',
        favorite: true,
        star: 3.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/pasta-tomato.jpg',
        cookTime: '10-15',
        origins: ['italy'],
      },

      {
        id: 6,
        price: 25,
        name: 'Salad Chicken',
        favorite: false,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/salad-chicken.jpg',
        cookTime: '10-12',
        origins: ['egypt'],
      },

      {
        id: 7,
        price: 35,
        name: 'Meat Dish',
        favorite: false,
        star: 5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/meat-dish.jpg',
        cookTime: '20-40',
        origins: ['italy'],
      },

      {
        id: 8,
        price: 45,
        name: 'skewers',
        favorite: true,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/skewers.jpg',
        cookTime: '20-25',
        origins: ['indian'],
      }
    ]
  }
}

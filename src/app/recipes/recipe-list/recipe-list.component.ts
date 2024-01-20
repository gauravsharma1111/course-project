import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'New Recipe',
      'An amazing recipe',
      'https://sugarspunrun.com/wp-content/uploads/2023/08/French-Toast-recipe-4-of-5.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

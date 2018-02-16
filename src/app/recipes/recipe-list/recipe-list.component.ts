import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Firs Recipe',
               'Simple description',
                'https://static01.nyt.com/images/2017/09/27/dining/27INSTAPOT1/27INSTAPOT1-superJumbo.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test",
      "Simply a test",
      "https://deliciouslyella.com/wp-content/uploads/2019/07/speedy-tomato-pasta-recipe-2.jpg"
    ),
    new Recipe(
      "Test1",
      "Simply a test1",
      "https://deliciouslyella.com/wp-content/uploads/2019/07/speedy-tomato-pasta-recipe-2.jpg"
    ),
    new Recipe(
      "Test2",
      "Simply a test2",
      "https://deliciouslyella.com/wp-content/uploads/2019/07/speedy-tomato-pasta-recipe-2.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}

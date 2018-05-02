import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from "../services/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    // hero : string = "Superman";
    hero : Hero = {
      id : 1,
      name : "Superman"
    }
    heroes : Hero[] = HEROES;

    selectedHero : Hero;//armaezan dados do hero selecionado

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero : Hero){//armazenar hero em selectedHero
    // alert(hero.name);
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}

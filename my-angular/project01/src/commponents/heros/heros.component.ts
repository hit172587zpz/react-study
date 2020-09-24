import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// import { HEROES } from '../../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  // heros:string = 'Windstorm' 

  // hero:Hero = {
  //   id: 1,
  //   name: 'Windstrom'
  // }
  // heros = HEROES
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero:Hero): void{
    this.selectedHero=hero;
    console.log(this.selectedHero)
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  constructor(private heroService: HeroService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
<<<<<<< HEAD
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
=======
import { HEROES } from '../mock-heroes';
>>>>>>> 679ae1a1389f9aa461af990cb327e70dd84f5a85

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = 'Windstorm';
<<<<<<< HEAD
  //heroes = HEROES;
  heroes: Hero[];

  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  /**
   * Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
   * The constructor shouldn't do anything. 
   * It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
   * 
   */
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
=======
  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
>>>>>>> 679ae1a1389f9aa461af990cb327e70dd84f5a85
  }

}

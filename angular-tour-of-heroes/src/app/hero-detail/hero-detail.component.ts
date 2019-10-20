import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
=======
import { Hero } from '../hero';
>>>>>>> 679ae1a1389f9aa461af990cb327e70dd84f5a85

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
<<<<<<< HEAD
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
=======
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 679ae1a1389f9aa461af990cb327e70dd84f5a85

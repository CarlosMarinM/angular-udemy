import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroesArr: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesArr = this.heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}

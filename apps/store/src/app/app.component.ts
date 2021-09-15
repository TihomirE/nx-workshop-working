import { Component } from '@angular/core';
import { formatRating } from '../../../../libs/store/util-formatters/src/index';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  games = this.http.get<Game[]>('/api/games');

  formatRating = formatRating;
}
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeachBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

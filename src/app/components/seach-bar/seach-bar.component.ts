import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeachBarComponent implements OnInit {
  @Output() getDataByKeywordEvent: EventEmitter<any> = new EventEmitter();

  keyword: string = ''

  constructor() {

  }

  onInputText(e: any) {
    let searchString = e.target.value
    this.keyword = searchString
  }
  onClickSearch() {
    this.getDataByKeywordEvent.emit(this.keyword)
  }
  onKey(e: any) {
    if (e.keyCode == 13) {
      // if enter
      let searchString = e.target.value
      this.getDataByKeywordEvent.emit(this.keyword)

    }
  }

  ngOnInit(): void {
  }

}

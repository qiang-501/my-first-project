import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-vk-search',
  templateUrl: './vk-search.component.html',
  styleUrl: './vk-search.component.scss',
})
export class VkSearchComponent implements OnInit {
  @Input() searchKeyword: any = '';
  @Input() placeholder = '';
  constructor() {}
  @Output() keyWordsChangeEvent = new EventEmitter<string>();
  ngOnInit() {}
  onKeyWordsChange(key: string) {
    this.search(key);
  }
  onKeyPress() {}
  search(key?: string) {
    this.keyWordsChangeEvent.emit(key ?? this.searchKeyword);
  }
}

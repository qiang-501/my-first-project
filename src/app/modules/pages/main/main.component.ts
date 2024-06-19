import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface ChatModel {
  content?: string;
  position?: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public chatList: Array<ChatModel> = [];
  public chatTxt: string = '';

  @ViewChild('content') content: any;
  private websocket: WebSocket;
  constructor() {
    this.websocket = new WebSocket('ws://localhost:8006' + '/ws');
  }
  ngOnInit(): void {
    this.websocket.onopen = function (evt) {
      console.log('Connection open ...');
    };
    var i = 0;
    let self = this;
    this.websocket.onmessage = function (msg) {
      console.log('Received Message: ' + msg.data);
      if (i == 0) {
        self.chatList.push({ content: msg.data, position: 'left' });
        i++;
      } else {
        if (msg.data?.trim() === '[end]') {
          i = 0;
        } else {
          i++;
          self.chatList[self.chatList.length - 1].content += msg.data;
        }
      }

      self.content.nativeElement.scrollTo({
        top: self.content.nativeElement.scrollHeight + 200,
        behavior: 'smooth',
      });
    };
  }
  public submit() {
    //var element = <HTMLElement>document.getElementById('chatContent');
    this.chatList.push({ content: this.chatTxt, position: 'right' });
    this.websocket.send(this.chatTxt);
    this.chatTxt = '';
    this.content.nativeElement.scrollTo({
      top: this.content.nativeElement.scrollHeight + 200,
      behavior: 'smooth',
    });
    // element.scrollTo({ top: element.scrollTop + 200, behavior: 'smooth' });
  }
}

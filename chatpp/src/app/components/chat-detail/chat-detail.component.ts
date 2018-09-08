import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ChatItem } from '../../interface/chatitem.interface';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  chatItemList:ChatItem[];
  constructor(dataService:DataService) { }

  ngOnInit() {

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundStyleService } from 'src/app/shared/services/background-style.service';

@Component({
  selector: 'app-valentines',
  templateUrl: './valentines.component.html',
  styleUrls: ['./valentines.component.scss']
})
export class ValentinesComponent implements OnInit {
  public recipient = '';
  public message = [''];

  private messages = {
    'dagmar': ['Boom boom boom, I want you in my room.'],
    'martha': ['If you gave me a star for every time you brightened up my life...', 'I\'d be holding the galaxy.'],
    'sage': ['OwO what\'s this?'],
    'squad': ['Jullie hebben mijn hart gekoloniseerd'],
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private backgroundStyle: BackgroundStyleService ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.recipient = params.recipient;
    this.message = this.messages[this.recipient];
  }

  public lightBackground( light: boolean ) {
    this.backgroundStyle.toggleBackground( light );
  }
}

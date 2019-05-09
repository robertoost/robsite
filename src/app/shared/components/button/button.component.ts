import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BackgroundStyleService } from '../../services/background-style.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  mouseover: boolean;

  constructor( private $backgroundStyle: BackgroundStyleService ) { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.$backgroundStyle.toggleBackground( true );
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.$backgroundStyle.toggleBackground( false );
  }

}

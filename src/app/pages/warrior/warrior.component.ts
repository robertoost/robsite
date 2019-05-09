import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BackgroundStyleService } from 'src/app/shared/services/background-style.service';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.scss']
})
export class WarriorComponent implements AfterViewInit {

  @ViewChild( 'warrior' ) warriorElement: ElementRef;

  constructor(
    private $backgroundStyle: BackgroundStyleService,
  ) { }

  ngAfterViewInit() {
    const tiger = this.warriorElement.nativeElement;
    tiger.addEventListener('mouseover', () => this.$backgroundStyle.toggleBackground( true ) );
    tiger.addEventListener('mouseout', () => this.$backgroundStyle.toggleBackground( false ) );
  }
}

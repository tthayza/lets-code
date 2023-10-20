import { Component, Input, OnInit } from '@angular/core';
import { FeatureData } from 'src/app/models/feature-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() public featuresData!: FeatureData;
  @Input() public backgroundcolor!: string;
  constructor() {
    console.log('construtor');
  }

  ngOnChanges(): void {
    console.log('onchanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentInit(): void {
    console.log('aftercontentinit');
  }
  ngAfterContentChecked(): void {
    console.log('aftercontentchecked');
  }
  ngAfterViewtInit(): void {
    console.log('afterviewinit');
  }
  ngAfterViewtChecked(): void {
    console.log('afterviewchecked');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoItemComponent } from './meteo-item.component';

describe('MeteoItemComponent', () => {
  let component: MeteoItemComponent;
  let fixture: ComponentFixture<MeteoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

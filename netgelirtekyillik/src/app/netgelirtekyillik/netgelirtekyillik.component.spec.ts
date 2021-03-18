import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetgelirtekyillikComponent } from './netgelirtekyillik.component';

describe('NetgelirtekyillikComponent', () => {
  let component: NetgelirtekyillikComponent;
  let fixture: ComponentFixture<NetgelirtekyillikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetgelirtekyillikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetgelirtekyillikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XkcdCartoonComponent } from './xkcd-cartoon.component';

describe('XkcdCartoonComponent', () => {
  let component: XkcdCartoonComponent;
  let fixture: ComponentFixture<XkcdCartoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XkcdCartoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XkcdCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

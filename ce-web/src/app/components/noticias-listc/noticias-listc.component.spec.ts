import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasListcComponent } from './noticias-listc.component';

describe('NoticiasListcComponent', () => {
  let component: NoticiasListcComponent;
  let fixture: ComponentFixture<NoticiasListcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasListcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasListcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

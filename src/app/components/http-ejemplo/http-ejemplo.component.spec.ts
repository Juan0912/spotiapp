import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpEjemploComponent } from './http-ejemplo.component';

describe('HttpEjemploComponent', () => {
  let component: HttpEjemploComponent;
  let fixture: ComponentFixture<HttpEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpEjemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

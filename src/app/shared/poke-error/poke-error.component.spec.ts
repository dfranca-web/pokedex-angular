import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeErrorComponent } from './poke-error.component';

describe('PokeErrorComponent', () => {
  let component: PokeErrorComponent;
  let fixture: ComponentFixture<PokeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

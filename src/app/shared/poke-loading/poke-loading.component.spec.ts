import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeLoadingComponent } from './poke-loading.component'

describe('PokeLoadingComponent', () => {
  let component: PokeLoadingComponent
  let fixture: ComponentFixture<PokeLoadingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeLoadingComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PokeLoadingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

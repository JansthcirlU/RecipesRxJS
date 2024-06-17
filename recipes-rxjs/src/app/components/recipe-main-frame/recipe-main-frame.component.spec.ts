import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMainFrameComponent } from './recipe-main-frame.component';

describe('RecipeMainFrameComponent', () => {
  let component: RecipeMainFrameComponent;
  let fixture: ComponentFixture<RecipeMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeMainFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

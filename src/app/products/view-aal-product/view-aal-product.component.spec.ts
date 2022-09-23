import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAalProductComponent } from './view-aal-product.component';

describe('ViewAalProductComponent', () => {
  let component: ViewAalProductComponent;
  let fixture: ComponentFixture<ViewAalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAalProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

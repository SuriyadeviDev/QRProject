import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoListingComponent } from './kendo-listing.component';

describe('KendoListingComponent', () => {
  let component: KendoListingComponent;
  let fixture: ComponentFixture<KendoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

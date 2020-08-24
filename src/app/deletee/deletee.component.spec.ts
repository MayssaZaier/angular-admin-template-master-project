import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeComponent } from './deletee.component';

describe('DeleteeComponent', () => {
  let component: DeleteeComponent;
  let fixture: ComponentFixture<DeleteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

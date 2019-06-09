import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorditFormComponent } from './recordit-form.component';

describe('RecorditFormComponent', () => {
  let component: RecorditFormComponent;
  let fixture: ComponentFixture<RecorditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

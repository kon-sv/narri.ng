import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugView } from './debug.view';

describe('DebugView', () => {
  let component: DebugView;
  let fixture: ComponentFixture<DebugView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

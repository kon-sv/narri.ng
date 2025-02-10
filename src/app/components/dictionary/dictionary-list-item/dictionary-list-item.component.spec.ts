import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryListItemComponent } from './dictionary-list-item.component';

describe('DictionaryListItemComponent', () => {
  let component: DictionaryListItemComponent;
  let fixture: ComponentFixture<DictionaryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

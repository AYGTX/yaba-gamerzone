import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoNewsComponent } from './csgo-news.component';

describe('CsgoNewsComponent', () => {
  let component: CsgoNewsComponent;
  let fixture: ComponentFixture<CsgoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

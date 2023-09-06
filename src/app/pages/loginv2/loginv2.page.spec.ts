import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Loginv2Page } from './loginv2.page';

describe('Loginv2Page', () => {
  let component: Loginv2Page;
  let fixture: ComponentFixture<Loginv2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Loginv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

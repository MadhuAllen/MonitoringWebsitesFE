import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorWebsitesComponent } from './monitor-websites.component';

describe('MonitorWebsitesComponent', () => {
  let component: MonitorWebsitesComponent;
  let fixture: ComponentFixture<MonitorWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

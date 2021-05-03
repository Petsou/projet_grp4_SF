import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousListComponent } from './rendezvous.list.component';

describe('RendezvousListComponent', () => {

    let component: RendezvousListComponent;
    let fixture: ComponentFixture<RendezvousListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RendezvousListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RendezvousListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

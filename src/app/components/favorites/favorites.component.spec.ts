import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { CardComponent } from '../home/card/card.component';
import { By } from '@angular/platform-browser';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should show 5 favorite event', () => {
    component.favoriteEvents = [
      {
        rss_titel: 'test1',
        von: '22.3.2022',
        bon: '24.3.2022',
        zeit: '13:00-15:00',
      },
      {
        rss_titel: 'test2',
        von: '22.3.2022',
        bon: '24.3.2022',
        zeit: '13:00-15:00',
      },
      {
        rss_titel: 'test3',
        von: '22.3.2022',
        bon: '24.3.2022',
        zeit: '13:00-15:00',
      },
      {
        rss_titel: 'test4',
        von: '22.3.2022',
        bon: '24.3.2022',
        zeit: '13:00-15:00',
      },
      {
        rss_titel: 'test5',
        von: '22.3.2022',
        bon: '24.3.2022',
        zeit: '13:00-15:00',
      },
    ];
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('card'));

    expect(cards.length).toBe(5);
  });

  fit('should show 0 cards and message if there is no favorite events', () => {
    component.favoriteEvents = [];
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('card'));
    const message = fixture.debugElement.query(By.css('h2'));

    expect(cards.length).toBe(0);
    expect(message.nativeElement.textContent.trim()).toEqual(
      'No favorite events :('
    );
  });
});

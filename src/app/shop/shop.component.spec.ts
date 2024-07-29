import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';

describe('ShopComponent', () => {
  let shop: ShopComponent;
  let service: ShopService;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopComponent, ShopService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    service = TestBed.inject(ShopService);
    shop = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(shop).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers  sum(num1: number, num2: number)', () => {
    const fixture = TestBed.createComponent(ShopComponent);
    const shop = fixture.componentInstance;

    // Probar funcion en formato de blackbox /caja negra
    const mockedData = { num1: 20, num2: 30 };
    const expectResult: number = 50;

    const result = shop.sum(mockedData.num1, mockedData.num2);
    expect(result).toEqual(expectResult);
  });
});

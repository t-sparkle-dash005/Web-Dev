import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: any = null;

  categories = [
    { name: 'Phones', products: [
      { name: 'Apple iPhone 13', likes: 89, description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.', price: 900, image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium' },
      { name: 'Apple iPhone 16 Pro Max', likes: 77, description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой.', price: 1200, image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium' },
      { name: 'Xiaomi Redmi 13C', likes: 67, description: 'Телефон отличного качества: звук, камера, цветопередача. В комплекте зарядка, прозрачный чехол и защитное стекло (на самом телефоне тоже наклеена защитная плёнка, что очень приятно). Огромное спасибо ИП Технострой! Вот, теперь думаю и себе заказать такой телефон!', price: 700, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium' },
      { name: 'Apple iPhone 16 Pro Max', likes: 55, description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой..', price:1200, image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium' },
      { name: 'Realme Note 50', likes: 44, description: 'Смартфон Realme Note 50 диагональю 6.7" выполнен в голубом корпусе с защитой по стандарту IP54. Он поддерживает установку 2 SIM-карт, оборудован модулями 4G и GPS. Поэтому устройство без сбоев работает в беспроводной сети, при обрывах быстро восстанавливает связь.', price: 600, image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium' }
    ] 
    },
    { name: 'Laptops', products: [{ name: 'MacBook Pro', likes: 0 }] },
    { name: 'Tablets', products: [{ name: 'iPad Air', likes: 0 }] },
    { name: 'Headphones', products: [{ name: 'AirPods Pro', likes: 0 }] }
  ];

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  title='shop';
}



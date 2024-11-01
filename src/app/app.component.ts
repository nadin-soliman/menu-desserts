import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

interface DessertCard {
  image: string;
  dessertType: string;
  dessertName: string;
  price: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'menu-desserts';
  cards: DessertCard[] = [
    { image: 'src/assets/images/image-waffle-thumbnail.jpg', dessertType: 'Waffle', dessertName: 'Waffle with Berries', price: 6.50 },
    { image: 'src/assets/image-creme-brulee-thumbnail.jpg', dessertType: 'Creme Brulee', dessertName: 'Vanilla Bean Creme Brulee', price: 7.00 },
    { image: 'src/assets/image-Macaron-thumbnail.jpg', dessertType: 'Macaron', dessertName: 'Macaron Mix of Five', price: 8.0 },
    { image: 'src/assets/image-tiramisu-thumbnail.jpg', dessertType: 'Tiramisu', dessertName: 'Classic Tiramisu', price: 5.50 },
    { image: 'src/assets/image-baklava-thumbnail.jpg', dessertType: 'Baklava', dessertName: 'Pistachio Baklava', price: 4.00 },
    { image: 'src/assets/image-meringue-thumbnail.jpg', dessertType: 'Pie', dessertName: 'Lemon Meringue', price: 5.00 },
    { image: 'src/assets/image-cake-thumbnail.jpg', dessertType: 'Cake', dessertName: 'Red Velvet Cake', price: 4.50 },
    { image: 'src/assets/image-brownie-thumbnail.jpg', dessertType: 'Brownie', dessertName: 'Salted Caramel Brownie', price: 5.50 },
    { image: 'src/assets/image-panna-cotta-thumbnail.jpg', dessertType: 'Panna Cotta', dessertName: 'Vanilla Panna Cotta', price: 6.50 },
  ];
}

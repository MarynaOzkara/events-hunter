import { Category } from '../schemas/restaurant.schema';

export class createRestaurantDto {
  readonly name: string;
  readonly description: string;
  readonly email: string;
  readonly phone: number;
  readonly address: string;
  readonly category: Category;
  readonly images: object[];
}

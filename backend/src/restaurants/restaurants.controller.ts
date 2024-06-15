import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';
import { createRestaurantDto } from './dto/create-restautant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}
  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll();
  }
  @Post()
  async createRestaurant(
    @Body()
    restaurant: createRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.createNew(restaurant);
  }
  @Get(':id')
  async getRestaurant(
    @Param('id')
    id: string,
  ): Promise<Restaurant> {
    return this.restaurantsService.findById(id);
  }
  @Put(':id')
  async updateRestaurant(
    @Param('id')
    id: string,
    @Body()
    restaurant,
  ): Promise<Restaurant> {
    return this.restaurantsService.updateById(id, restaurant);
  }
}

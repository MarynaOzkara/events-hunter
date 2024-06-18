import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';
import { createRestaurantDto } from './dto/create-restautant.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}
  @Get()
  @ApiOperation({ summary: 'Get All Restaurans' })
  @ApiResponse({
    status: 200,
    description: 'All Restaurants',
  })
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Create Restaurant' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Restaurant name',
          example: 'Restoran Armudu Haabersti',
        },
        description: {
          type: 'string',
          description: 'Description of restaurant',
          example:
            'A modern restaurant with a menu that will make your mouth water. Servicing delicious food since 2014. Enjoy our seasonal menu and experience the beauty of naturalness.',
        },
        email: {
          type: 'string',
          description: 'Restaurants email',
          example: 'haabersti@restoranarmudu.ee',
        },
        address: {
          type: 'string',
          description: 'Restaurants address',
          example: 'Meistri 22, 13517 Tallinn',
        },
        category: {
          type: 'string',
          description: 'Restaurants category',
          example: 'Fine dinning',
        },
        images: {
          type: 'array',
        },
      },
    },
  })
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
    await this.restaurantsService.findById(id);
    return this.restaurantsService.updateById(id, restaurant);
  }
  @Delete(':id')
  async deleteRestaurant(
    @Param('id')
    id: string,
  ): Promise<{ deleted: boolean }> {
    await this.restaurantsService.findById(id);
    const restaurant = this.restaurantsService.deleteById(id);
    if (restaurant) {
      return {
        deleted: true,
      };
    }
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { MongoConection } from './config/mongoConection';
import { RestaurantsModule } from './restaurants/restaurants.module';
// import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: MongoConection,
    // }),
    // ConfigModule.forRoot({
    //   load: [configuration],
    // }),
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

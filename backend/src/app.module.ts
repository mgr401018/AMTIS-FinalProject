import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';
import { CategoriesModule } from './categories/categories.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/jumping-parats-backend') , ProductModule, CategoriesModule ,],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}

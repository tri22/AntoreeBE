import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cho phép CORS
  app.enableCors({
    origin: '*', // hoặc ['http://localhost:5173'] để chỉ định domain cụ thể
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api/v1');

  await app.listen(8080);
}
bootstrap();

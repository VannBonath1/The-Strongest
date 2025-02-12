import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sayHello } from '@my-monorepo/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log(sayHello);
}
bootstrap();

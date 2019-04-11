import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // TODO: BACKUP DATABASE
  // const timestamp = new Date().getTime();
  // fs.copyFile('ciripa.db', `ciripa_backup${timestamp}.db`, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  // });

  await app.listen(3000);
}
bootstrap();

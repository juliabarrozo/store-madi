// prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 Torna este módulo disponível em todo o projeto
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 ESSENCIAL: Permite que outros módulos o injetem
})
export class PrismaModule {}
// roles.decorator.ts (Exemplo NestJS)
import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@prisma/client'; // Importe a tipagem

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
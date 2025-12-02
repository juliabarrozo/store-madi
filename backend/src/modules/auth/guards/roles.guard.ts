// roles.guard.ts (Exemplo NestJS com ReflectMetadata)
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Pega as roles permitidas no método/controller
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(), // Target: Método (ex: getUsers())
      context.getClass(),    // Target: Classe (ex: UsersController)
    ]);

    if (!requiredRoles) {
      // Se nenhuma role foi especificada, o acesso é liberado
      return true;
    }

    // 2. Pega as informações do usuário (role do usuário logado)
    const { user } = context.switchToHttp().getRequest();

    // 3. Verifica se a role do usuário está entre as roles permitidas
    return requiredRoles.some((role) => user.role === role);
  }
}
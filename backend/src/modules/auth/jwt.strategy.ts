// jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants'; // Onde está o seu segredo JWT
import { UsersService } from 'src/modules/users/users.service'; // Se for necessário carregar o usuário

// Define a interface para o payload do token
interface JwtPayload {
  sub: number; // ID do usuário
  email: string;
  role: string; // Exemplo de dado extra que você incluiu no token
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    // A função super() configura a estratégia
    super({
      // 1. Onde buscar o JWT (neste caso, no cabeçalho Authorization como Bearer token)
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      
      // 2. O segredo usado para assinar o token
      secretOrKey: jwtConstants.secret, // Substitua pelo seu segredo
      
      // 3. Ignorar verificação de expiração? (Sempre false em produção!)
      ignoreExpiration: false, 
    });
  }

  // O método 'validate' é chamado após a validação do token (assinatura e expiração)
  async validate(payload: JwtPayload) {
    // Você pode usar o payload para buscar o usuário no banco de dados (opcional, mas recomendado)
    const user = await this.usersService.findOne(payload.sub);
    
    if (!user) {
        throw new UnauthorizedException();
    }
    
    // Retorna os dados do usuário que serão anexados a req.user (por exemplo, req.user.id, req.user.role)
    // Se o token for válido, os dados aqui retornados serão o objeto 'user' na requisição.
    return { 
        id: payload.sub, 
        email: payload.email, 
        role: payload.role // Permite o uso do RolesGuard
    };
  }
}
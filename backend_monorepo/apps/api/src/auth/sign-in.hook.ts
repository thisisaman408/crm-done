import { Injectable } from '@nestjs/common';
import {
  Hook,
  BeforeHook,
  AuthHookContext,
} from '@thallesp/nestjs-better-auth';
import { prismaClient as prisma } from '../lib/database/prisma-client.js';
import { APIError } from 'better-auth/api';

@Hook()
@Injectable()
export class SignInHook {
  @BeforeHook('/sign-in/email')
  async handle(ctx: AuthHookContext) {
    const body = ctx.body;

    console.log('LOGIN ATTEMPT BODY:', JSON.stringify(body, null, 2));

    const email = body?.email;
    const roleId = body?.roleId;
    if (!email || !roleId) {
      throw new APIError('BAD_REQUEST', {
        message: 'Email and Role selection are required for login.',
      });
    }

    // Strict Multi-Factor Identity Check
    // We check if a user exists with this EXACT combination of Email + Role
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        role: {
          code: roleId,
        },
      },
    });

    if (!user) {
      throw new APIError('FORBIDDEN', {
        message: 'Identity mismatch: The provided Email and Role combination is invalid.',
      });
    }

    // If it matches perfectly, Better Auth will continue to check the password and log them in!
  }
}

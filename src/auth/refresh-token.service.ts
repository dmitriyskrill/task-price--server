import { Injectable } from '@nestjs/common';
import type { Response } from 'express';

@Injectable()
export class RefreshTokenService {
  readonly EXPIRE_DAY_REFRESH_TOKEN = 1; // TODO вытащаить из env
  readonly REFRESH_TOKEN_NAME = 'refreshToken'; // TODO вытащаить из env

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: 'localhost', // TODO вытащаить из env
      expires: expiresIn,
      secure: true, // true if production // TODO вытащаить из env в виде node-env
      sameSite: 'none', // lax if production
    });
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: 'localhost',
      expires: new Date(0),
      secure: true, // true if production
      sameSite: 'none', // lax if production
    });
  }
}

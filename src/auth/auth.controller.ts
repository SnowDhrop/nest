import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
import { Public } from './constants';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TokenResponse } from './token-response.interface';


  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({ summary: 'Login' })
    @ApiResponse({
      status: 200,
      type: TokenResponse,
    })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.pseudo, signInDto.password);
    }
  }
import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { isBase64Image, isValidCustomerCode, isValidMeasureType, isValidDate  } from './utils/validation.utils'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// SEM INTEGRACAO DO GEMINI
@Controller('meter')
export class MeterController {
  @Post('upload')
  async uploadReading(
    @Body() body: { image: string; customer_code: string; measure_datetime: string; measure_type: string },
  ) {
    const { image, customer_code, measure_datetime, measure_type } = body;

    if (!isBase64Image(image)) {
      throw new HttpException({
        error_code: 'INVALID_DATA',
        error_description: 'Imagem em formato base64 inválida.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!isValidCustomerCode(customer_code)) {
      throw new HttpException({
        error_code: 'INVALID_DATA',
        error_description: 'Código de cliente inválido.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!isValidMeasureType(measure_type)) {
      throw new HttpException({
        error_code: 'INVALID_DATA',
        error_description: 'Tipo de medição inválido.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!isValidDate(measure_datetime)) {
      throw new HttpException({
        error_code: 'INVALID_DATA',
        error_description: 'Data de medição inválida.',
      }, HttpStatus.BAD_REQUEST);
    }
    return 
  }
}

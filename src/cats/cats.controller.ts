import { Body, Controller, Get, Param, Post, Put, Delete, Patch, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { Cat as CatEntity } from './entities/cat.entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get all cats"})
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: () => CatEntity,
  })
  @ApiResponse({status: 403, description: "Forbidden",
})
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get cat by id"})
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CatEntity,
  })
  findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update cat' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CatEntity,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: CreateCatDto,
  ): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete cat' })
  @ApiResponse({ status: 200, description: 'Deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.catsService.delete(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Patch cat' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CatEntity,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async patch(
    @Param('id') id: string,
    @Body() partialCatDto: Partial<CreateCatDto>,
  ): Promise<Cat> {
    return this.catsService.patch(id, partialCatDto);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NameService } from './name.service';
import { CreateNameDto } from './dto/create-name.dto';
import { UpdateNameDto } from './dto/update-name.dto';
import { Name } from './interfaces/name.interface';

@Controller('name')
export class NameController {
  constructor(private readonly nameService: NameService) {}

  @Post()
  create(@Body() createNameDto: CreateNameDto) {
    return this.nameService.create(createNameDto);
  }

  @Get()
  findAll(): Promise<Name[]> {
    return this.nameService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.nameService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNameDto: UpdateNameDto) {
  //   return this.nameService.update(+id, updateNameDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.nameService.remove(+id);
  // }
}

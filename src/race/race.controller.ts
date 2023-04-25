import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaceService } from './race.service';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Race } from './interfaces/race.interface';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Post()
  create(@Body() createRaceDto: CreateRaceDto) {
    return this.raceService.create(createRaceDto);
  }

  @Get()
  findAll(): Promise<Race[]> {
    return this.raceService.findAll();
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

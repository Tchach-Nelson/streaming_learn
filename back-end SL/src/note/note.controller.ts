import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from 'src/dto/create-note.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Note } from './note.entity';


@Controller('note')
@ApiTags('note')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Post()
    @ApiOperation({ summary: 'Creer un Message' })
    @ApiResponse({ status: 200, description: 'Message créer' })
    create(@Body() dto: CreateNoteDto){
        return this.noteService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les message' })
    @ApiResponse({ status: 200, description: 'Liste des message' })
    find(){
        return this.noteService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour du message' })
    @ApiResponse({ status: 200, description: 'Utilisateur mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateNoteDto){
        return this.noteService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un message' })
    @ApiResponse({ status: 200, description: 'Utilisateur supprimer' })
    delete(@Param('id') id:number){
        return this.noteService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un message' })
    @ApiResponse({ status: 200, description: 'Utilisateur info' })
    info(@Param('id') id:number){
        return this.noteService.info(id) ;
    }

    @Get('infoNote/')
    @ApiOperation({ summary: 'info sur un message' })
    @ApiResponse({ status: 200, description: 'Utilisateur info' })
    infoNote(){
        return this.noteService.infoNote() ;
    }
}

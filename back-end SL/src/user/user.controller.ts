import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { LoginDto } from 'src/dto/login.dto';
import { JoinTableDto } from 'src/dto/join-tables.dto';
import { Response } from 'express';
import { join } from 'path';
import { existsSync, createReadStream } from 'fs';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/join')
    @ApiOperation({ summary: 'Joindre 2 tables' })
    @ApiResponse({ status: 200, description: 'jointure faite' })
    joinner(@Body() dto: JoinTableDto){
        return this.userService.joinner(dto);
    }

    @Post()
    @ApiOperation({ summary: 'Creer un utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur créer' })
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    find(){
        return this.userService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateUserDto){
        return this.userService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur supprimer' })
    delete(@Param('id') id:number){
        return this.userService.delete(id) ;
    }

    @Post('/login')
    @ApiOperation({ summary: 'Loger un utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur logé' })
    Login(@Body() user:LoginDto ){
        return this.userService.existUserLogin(user.nom, user.pass);
    } 

    @Get('info/:id')
    @ApiOperation({ summary: 'Données sur un Utilisateur' })
    @ApiResponse({ status: 200, description: 'Données affichées' })
    info(@Param('id') id: number) {
        return this.userService.info(id);
    }

    @Get('file/:filename')
    getFile(@Param('filename') filename: string, @Res() res: Response) {
        const filePath = join(__dirname, '../../', 'uploads', filename);
        console.log(filePath);

        if (existsSync(filePath)) {
        const fileStream = createReadStream(filePath);
        fileStream.pipe(res);
        } else {
        res.status(404).json({ message: 'File not found' });
        }
    }

    @Get('/infoEtu')
    @ApiOperation({ summary: 'info d\'etudiant' })
    @ApiResponse({ status: 200, description: 'info d\'etudiant' })
    infoEtu(){
        
        return this.userService.infoEtu();
    }

}

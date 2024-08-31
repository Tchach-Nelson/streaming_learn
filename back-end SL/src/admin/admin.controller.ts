import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    @Post()
    @ApiOperation({ summary: 'Creer un admin' })
    @ApiResponse({ status: 200, description: 'Admin créer' })
    create(@Body() dto: CreateAdminDto){
        return this.adminService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les Admins' })
    @ApiResponse({ status: 200, description: 'Liste des Admins' })
    find(){
        return this.adminService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'Admin' })
    @ApiResponse({ status: 200, description: 'Admin mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateAdminDto){
        return this.adminService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un Admin' })
    @ApiResponse({ status: 200, description: 'Admin supprimer' })
    delete(@Param('id') id:number){
        return this.adminService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un Admin' })
    @ApiResponse({ status: 200, description: 'Admin info' })
    info(@Param('id') id:number){
        return this.adminService.info(id) ;
    }

}

import { Controller, Body, Get, Post, Param, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';
@Controller('api/v1/books')
export class BooksController {
    constructor( private readonly bookService: BooksService){}

    @Get()
    async getAllBook(): Promise<Book[]>{
        return this.bookService.getAllBook()
    }

    @Post(':id')
    async postBook(@Body() postData: Book): Promise<Book>{
        return this. bookService.createBook(postData)
    }

    @Get(':id')
    async getBook(@Param('id')id: number): Promise<Book>{
        return this.bookService.getBook(id)
    }

    @Put(':id')
    async updateBook(@Param('id')id: number, @Body()postData: Book){
        return this.bookService.updateBook(id,postData)
    }
}

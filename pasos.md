1.- crear el proyecto
    nest new nombre_proyecto
2.- Instalar dependencias (opcional)
    cd nombre_proyecto
    npm install
3.- Correr el proyecto
    npm run star:dev 
4.- crear repositorio en github
5.- vincular proyecto con repositorio github
    git remote add origin url del proyecto
    git push -u origin master o (main)

6.- configurar el proyecto vacio
    6.1 habilitar swagger (ingrear documentacion OPENAPI (introduction)) 
    6.2 habilitar linter (profeformateo) (ingrear a .prettierrc) ({
                                                                    "printWidth": 120,
                                                                    "tabWidth": 2,
                                                                    "singleQuote": true,
                                                                    "trailingComma": "all",
                                                                    "endOfLine": "auto"
                                                                    })
    - confgModule (ingresamos a Tecnicas y configuracion) 
        -crearmos nuestro archivo .env
            -el archivo main.ts debe quedar de la siguiente manera
            
                                import { NestFactory } from '@nestjs/core';
                                import { AppModule } from './app.module';
                                import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
                                import { ConfigService } from '@nestjs/config';

                                async function bootstrap() {
                                const app = await NestFactory.create(AppModule);
                                const configService = app.get(ConfigService); //aumentar este codigo

                                const config = new DocumentBuilder()
                                    .setTitle('Cats example')
                                    .setDescription('The cats API description')
                                    .setVersion('1.0')
                                    .addTag('cats')
                                    .build();
                                const documentFactory = () => SwaggerModule.createDocument(app, config);
                                SwaggerModule.setup('api', app, documentFactory);

                                const port = configService.get('PORT'); // aumentar este codigo
                                await app.listen(port); // cambiar por la variable 
                                console.log(`aplicacion esta corriendo en: ${await app.getUrl()} `); // colocar este codigo
                                }
                                bootstrap();
                
7.- correr el proyecto
    corregir sino corre el proyecto

8.- crear un modulo
    - Creamos folder con el nombre del modulo (dentro de la carpeta src)
        - .module.ts
        - .service.ts
        - .controller.ts        
        - (comando para crear de forma automatica los archivos: primero nest y enter
                                                                segundo nest generate module autos
                                                                cuarto nest generate service autos
                                                                tercero nest generate controller autos)
        -ingresamos a autos.controller.ts y creamos los servicios por ejemplo
                                                                export class AutosController {
                                                                     constructor() {}

                                                                         @Get() puede ser get o post
                                                                         listar() {
                                                                             return [];
                                                                         }
                                                                        }
        -agregar el modulo al archivo app.module.ts
9.- 


                                    
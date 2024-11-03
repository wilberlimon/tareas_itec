1.- crear el proyecto
    nest new nombre_proyecto
2.- Instalar dependencias (opcional)
    cd nombre_proyecto
    npm install
3.- Correr el proyecto
    npm run star:dev 
4.- crear repositorio en github
5.- vincular proyecto con repositorio github
    git add .
    git commit -m tarea2
    git branch -M main
    git remote add origin url del proyecto: enlace del repositorio
    git push -u origin master o (main)

6.- configurar el proyecto vacio
    6.1 habilitar swagger (ingrear documentacion OPENAPI (introduction))  npm install --save @nestjs/swagger
    6.2 habilitar linter (profeformateo) (ingrear a .prettierrc) ({
                                                                    "printWidth": 120, //amentamos este codigo
                                                                    "tabWidth": 2, // aumentamos este codigo
                                                                    "singleQuote": true,
                                                                    "trailingComma": "all",
                                                                    "endOfLine": "auto" // auemntamos este codigo
                                                                    })
    - confgModule (ingresamos a Tecnicas y configuracion)  npm i --save @nestjs/config
        -crearmos nuestro archivo .env
    - en el archivo app.modulo.ts colocar remplazar la siguiente linea de codigo imports: [], por la siguiente linea de codigo imports: [ConfigModule.forRoot()],
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
	- en el archivo app.modulo.ts colocar remplazar la siguiente linea de codigo imports: [], por la siguiente linea de codigo imports: [ConfigModule.forRoot()],
                
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
9.- buenas practicas de git 	(opcional)
    -crer main, dev, mi_rama_personal
        para crar ramas: git checlout -b nombre_rama
        subir la rama al repositorio de github: git push origin nombre_rama 

10.- crear el CRUD
    - crear el auto 
        -module (creamos el archivo autos.module.ts (autos debe ser remplazao por el que estas haciendo))
                                                    debemos crear una clase con los datos que almacenaran en la base de datos por ejemplo para auto
                                                    export class AutosModel{
                                                        Marca: string;
                                                        Modelo: number;
                                                        Año: string;
                                                        Color: string;
                                                        Estado: string;
                                                    }
                                                    y tambien tenemos que definir si el campo sera obligatorio o no para que no sea obligatorio se coloca lo siguiente ? antes de los dos puntos
    - creamos una carpeta dto
        -dto de entrda  (dentro de la carpeta dto creamos el archivo auto.input.dto.ts (auto debe ser el nombre del que se esta haciendo y ahi pegamos el codigo que creamos en el archivo autos.model.ts))
        para consumir lo que se iso en el en el auto.input.dto.ts demos instanacia en el autos.controller.ts el y debe quedar de la siguiente manera   
                            @Post('')
                            crear(@Body() datosEntrada: AutosDatosEntrada) {
                            return datosEntrada;
                             }
        decorador para habilitar campos en el body
        @ApiProperty()
        decorador para que los campos no sean obligatorios @ApiProperty({ required: false })
        -configurar validaciones
            nos vamos a la documentacion de nets.js
            apartado de tecnicas y validaciones e instalamos las librerias para validaciones
            npm i --save class-validator class-transformer
            pegar e main lo siguiente app.useGlobalPipes(new ValidationPipe());
        -configurar los sericios crd en nuestro .service.ts
        -inicializar el service en nuestro .controller.ts
11: conectar con la base de datos
    -configurar mongoose (mongodb)
    -

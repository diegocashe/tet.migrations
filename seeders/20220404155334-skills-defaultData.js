'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('skills', [{
                name: 'HTML',
                description: 'Estructura de páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PHP',
                description: 'Lenguaje de programación para paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'WordPress',
                description: 'CMS o sistema de gestión de contenido para crear paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'MySQL',
                description: 'Sistema de gestión de base de datos relacional',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Python',
                description: 'Lenguaje de programación de alto nivel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CSS',
                description: 'Estilos para páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'BOOTSTRAP',
                description: 'Framework de estilos para páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Javascript',
                description: 'Lenguaje de programación para páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Java',
                description: 'Lenguaje de programación versátil',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'SEO',
                description: 'Conocimiento sobre posicionamiento en buscadores',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C',
                description: 'Lenguaje de programación',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C#',
                description: 'Lenguaje de programación de alto nivel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'React.js',
                description: 'Framework para el backend de javascript',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'HTML5',
                description: 'Version actualizada de HTML con nuevas funciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'CSS3',
                description: 'Version actualizada de CSS con nuevas funciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'C++',
                description: 'Lenguaje de programación',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Node.js',
                description: 'Framework de javascript para actuar del lado del servidor',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Laravel',
                description: 'Framework de PHP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Web Scraping',
                description: 'Algoritmos especiales para recopilación de información de paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Flutter',
                description: 'Framework de código abierto desarrollado por Google para aplicaciones móviles',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Angular.js',
                description: 'Framework de javascript utilizado para front-end',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '.NET',
                description: 'Framework de microsoft para desarrollo de aplicaciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'SQL',
                description: 'Lenguaje de programación utilizado para manejo de base de datos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Desarrollo de aplicaciones móviles',
                description: 'Conocimiento en creación y desarrollo de aplicaciones móviles',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Desarrollo de software',
                description: 'Conocimiento sobre creación de aplicaciones informáticas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Diseño de videojuegos',
                description: 'Conocimiento en diseños visuales o técnicos para videojuegos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Objective C',
                description: 'Lenguaje de programación para desarrollo de aplicaciones móviles',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Microsoft SQL Server',
                description: 'Sistema de base de datos relacional',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Solidity',
                description: 'Lenguaje de programación utilizado para desarrollar contratos inteligentes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Visual Basic',
                description: 'Lenguaje de programación dirigido por eventos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Alojamiento web',
                description: 'Conocimientos sobre hosting para paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Administración de bases de datos',
                description: 'Conocimientos sobre gestión de bases de datos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Django',
                description: 'Framework de python para la realización de paginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Swift',
                description: 'Lenguaje de programación multiparadigma para desarrollo de aplicaciones móviles',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'JQuery',
                description: 'Biblioteca multiplataforma de Javascript para frontend',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'PostgreSQL',
                description: 'Sistema gestor de bases de datos relacional',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Maquetado de páginas web',
                description: 'Conocimientos en diseños de páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Figma',
                description: 'Herramienta para hacer prototipos de páginas web',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Typescript',
                description: 'Lenguaje de programación superconjunto de javascript',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Azure',
                description: 'Servicio de computación para la realización de pruebas y despliegue de aplicaciones en la nube',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Programación',
                description: 'Habilidades y conocimientos en el area de programación',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tensorflow',
                description: 'Framework de javascript utilizado para el desarrollo de inteligencia artificial',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Unity 3D',
                description: 'Herramienta o motor utilizado para la creación y desarrollo de videojuegos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Contratos inteligentes',
                description: 'Conocimientos sobre contratos inteligentes, es decir, utilizados en el manejo de cryptomonedas o productos NFT',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'FullStack',
                description: 'Amplios conocimientos en el area de desarrollo de aplicaciones y diversas tecnologías',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Traducción',
                description: 'Habilidades para traducir textos o audios de un idioma a otro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Transcripción',
                description: 'Buena capacidad para transcribir texto de un formato a otro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Redacción',
                description: 'Buena capacidad de redacción de texto',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Redacción publicitaria / Copywriting',
                description: 'Buenas capacidades de redacción para ventas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Excel',
                description: 'Aplicación informática para gestión administrativa de bases de datos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Diseño de logos',
                description: 'Habilidades para diseñar logos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Photoshop',
                description: 'Aplicación de edición de fotos e imágenes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Illustrator',
                description: 'Aplicación de diseño y edición de imágenes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Animación 3D',
                description: 'Conocimientos en animaciones en tres dimensiones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Animación 2D',
                description: 'Conocimientos en animaciones de dos dimensiones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Enseñanza',
                description: 'Capacidades para enseñar lecciones',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Matemáticas',
                description: 'Conocimientos en el area de matemáticas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Física',
                description: 'Conocimientos en el area de física',
                createdAt: new Date(),
                updatedAt: new Date()
            }





        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Skills', null, {});
    }
};
const http = require('http');
// EJEMPLO CON HTTP DE NODE NATIVO ( NO RECOMENDADO )
const server = http.createServer( (req,res) => {
   
    // console.log(req);
    
    res.writeHead(200, {
        'Content-Type': 'application/json',
   
        'token': '123456'
    });

    res.write('Hola mundo');

    const persona = {   
        id: 1,
        nombre: 'Javier'    
    }
    res.write( JSON.stringify( persona ));
    
    // ************  otro ejemplo para un csv **************
    /**
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    res.write('id,nombre\n');
    res.write('1,Javier\n');
    res.write('2,Juan\n');
    res.write('3,Pedro\n');
    res.write('4,Luis\n'); 
    */

    

    res.end();// Importante end() si no no funciona
});

const PORT = process.env.PORT | 8080;

server.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT} corriendo...`);
});










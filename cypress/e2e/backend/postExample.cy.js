describe('Pruebas en API con Cypress',()=> {

it('Ejemplo de post para el endpoint',()=>{    
cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
    userId:1,
    id: 102,
    title:'The shinning',
    body: 'una buena pelicula'
}).then((respuesta)=>{
    expect(respuesta.body).to.have.property('title','The shinning')
})
})
})
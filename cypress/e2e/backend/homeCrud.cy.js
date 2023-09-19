describe('Pruebas en API con Cypress',()=> {

it('El endpoint "post" responde 200', ()=>{
    cy.request({
    url:'https://jsonplaceholder.typicode.com/posts'
}).then((respuesta)=>{
    expect(respuesta.status).to.eq(200)

})
  
})
it('El endpoint "posts" tienen 100 entradas',()=>{
    /*cy.request({
        url:'https://jsonplaceholder.typicode.com/posts'
    })*/
cy.visit('https://jsonplaceholder.typicode.com')
cy.request('/posts')
.its('body')
.should('have.lenght',100)
})
it('el post 1 tiene por titulo',()=>{
cy.visit('https://jsonplaceholder.typicode.com')
cy.request('/posts/1')
.its('body')
.should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

})

})



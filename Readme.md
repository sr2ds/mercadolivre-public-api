# Mercado Livre Public API

Consultas básicas do Mercado Livre <br>

## Instalação

`npm install mercadolivre-public-api`

`import mercadolivre from 'mercadolivre-public-api'`

## Como utilizar 

### Retorna total de itens
```
let total = await mercadolivre.getTotalItens()
```

### Retorna itens utilizando Offset
```
offset = 0;
let itens = await mercadolivre.getItens(offset)
```

### Retorna todos os Itens 
```
async function getItensComplete() {
    let offset = 0;
    let itens = null
    let full_itens = []
    this.total = await mercadolivre.getTotalItens()

    while (this.total >= full_itens.length) {
        let itens = await mercadolivre.getItens(offset)
        full_itens = full_itens.concat(await mercadolivre.getItens(offset));
        offset += 50;
    } 
} 
```
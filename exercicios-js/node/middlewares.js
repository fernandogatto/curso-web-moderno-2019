const passo1 = (context, next) => {
    context.valor1 = 'mid1'
    next()
}

const passo2 = (context, next) => {
    context.valor2 = 'mid2'
    next()
}

const passo3 = context => context.valor3 = 'mid3'

const execute = (context, ...middlewares) => {
    const executePasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](context, () => executePasso(indice + 1))
    }
    executePasso(0)
}

const context = {}
execute(context, passo1, passo2, passo3)
console.log(context)
export function inspect( // decorator sem wrapper, caso não haja a necessidade de params
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`Método: ${propertyKey}`)
            console.log(`Parâmetros: ${JSON.stringify(args, null, 2)}`)
            const retorno = metodoOriginal.apply(this, args)
            console.log(`Retorno: ${JSON.stringify(retorno, null, 2)}`)
            return retorno
        }
        return descriptor
    }


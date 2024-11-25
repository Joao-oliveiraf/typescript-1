export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        const exp = "/<script>[\s\S]*?<\/script>/"
        if (typeof retorno === 'string') {
            console.log(`@escape em exec na classe ${this.constructor.name}
                para o método ${propertyKey}`);
            retorno = retorno.replace(exp, '');
        }
        return retorno
    }
    return descriptor
}
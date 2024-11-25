export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            if (!emSegundos) {
                console.log(`${propertyKey}: Tempo de execução ${(t2 - t1)} ms`);
                retorno;
                return descriptor;
            }
            console.log(`${propertyKey}: Tempo de execução ${(t2 - t1) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}

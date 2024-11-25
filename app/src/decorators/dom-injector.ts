export function domInjector(seletor: string) {
    // Modifica a classe no momento da declaração.
    /* 
    Após a modificação a classe passa a ter o acesso ao metodo getter, criado abaixo.
    Quando for acessada, a property em questão irá recorrer ao método getter incluido.
    */
    return function (
        target: any,
        propertyKey: string,
    ) {

        let elemento: HTMLElement;
        /*
        Variável elemento vai manter em cache o valor do seletor após a primeira chamada do getter()
        Posteriormente a função não precisa buscar novamente o mesmo seletor.
        */

        const getter = function () {

            if (!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);// Assume que o retorno do querySelector será um HTMLElement
                console.log(`target = ${target.constructor.name}, propertyKey = ${propertyKey}, seletor = ${seletor}`)
            }
            return elemento
        }

        // Definindo como a function getter irá modificar a classe
        Object.defineProperty(
            target, // Classe alvo
            propertyKey, // Property da classe alvo (inputData, inputQuantidade)
            {get: getter} // Incremento na property (inputData = getter(#data))
        );
    }
}
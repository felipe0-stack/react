const urlBase = 'https://backend-lp2.vercel.app/categorias';

export async function gravarCategoria (categoria) {
    const resposta = await fetch(urlBase, {
        'method': "POST",
        'headers': {
            "Content-Type": "application/json"
        },
        'body': JSON.stringify(categoria)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarCategoria (categoria) {
    const resposta = await fetch(urlBase+"/"+categoria.codigo, {
        'method': "PUT",
        'headers': {
            "Content-Type": "application/json"
        },
        'body': JSON.stringify(categoria)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function serviceExcluirCategoria (categoria) {
    const resposta = await fetch(urlBase+"/"+categoria.codigo, {
        'method': "DELETE",
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function consultarCategoria () {
    const resposta = await fetch(urlBase, {
        'method': "GET",
    });
    const resultado = await resposta.json();
    return resultado;
}
function impuestar(estado)
{
    let tasaImp = 0;
    switch(estado)
    {
        case 'CA':
            tasaImp = 0.0825;
            break;
        case 'UT':
            tasaImp = 0.0665;
            break;
        case 'NV':
            tasaImp = 0.08;
            break;
        case 'TX':
            tasaImp = 0.0625;
            break;
        case 'AL':
            tasaImp = 0.04;
            break;
        default:
            break;
    }
    return tasaImp;
}


function descuento(pedido)
{
    let desc = 0; 
    if (pedido >= 1000)
    {
        desc = 0.03;
    }
    else if(pedido >= 3000)
    {
        desc = 0.05;
    }
    else if(pedido >= 7000)
    {
        desc = 0.07;
    }
    else if(pedido >= 10000)
    {
        desc = 0.10;
    }
    else if(pedido >= 30000)
    {
        desc = 0.15;
    }
    return desc;
}

function calcularDescuento(pedido, desc)
{
    return pedido - (pedido*desc);
}

function calcularTotal(pedido, tasaImp, desc)
{
    const prov = calcularDescuento(pedido, desc);
    return prov+(prov*tasaImp);
}

export {impuestar, calcularTotal, descuento, calcularDescuento};



/*var e = document.getElementById("ddlViewBy");
var value = e.value;
var text = e.options[e.selectedIndex].text;*/
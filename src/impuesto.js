

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
    }
    return tasaImp;
}


function calcularImpuesto(mult, tasaImp)
{
    return mult+(mult*tasaImp);
}

export {impuestar, calcularImpuesto};



/*var e = document.getElementById("ddlViewBy");
var value = e.value;
var text = e.options[e.selectedIndex].text;*/
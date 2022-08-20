function impuestar(estado)
{
    let tasaImp = 0;
    switch(estado)
    {
        case 1:
            tasaImp = 0.0825;
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
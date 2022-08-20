function impuestar(estado/*, mult*/)
{
    let tasaImp = 0;
    switch(estado)
    {
        case 1:
            tasaImp = 0.0825;
            break;
    }
    //res = mult * tasaImp; 
    return tasaImp;
}

export default impuestar;

/*var e = document.getElementById("ddlViewBy");
var value = e.value;
var text = e.options[e.selectedIndex].text;*/
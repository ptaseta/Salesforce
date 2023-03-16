({
    funcionParaElPadre : function(component, event, helper) {
        var mensaje = "El topo " + component.get("v.topo") + " se está asomando";
        console.log(mensaje);
    }, 
    cambiarTopo : function(component, event, helper) {
        component.set("v.color", "azul");
        component.set("v.activo", false);
        if (event.getParam("numeroTopo") == component.get("v.topo")) {
            component.set("v.color", "rojo");
            component.set("v.activo", true);
        }
    }, 
    golpear : function(component, event, helper) {
        var eventoGolpe = $A.get("e.c:golpearTopo");
        if (component.get("v.activo")) {
            component.set("v.color", "azul");
            component.set("v.activo", false);
            console.log("Exito!");
            eventoGolpe.setParams({
                "acertar" : true
            });
        } else {
            console.log("Fallaste!");
            eventoGolpe.setParams({
                "acertar" : false
            });
        }
        eventoGolpe.fire();
    }
})

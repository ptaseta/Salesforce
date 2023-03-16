({
    myAction : function(component, event, helper) {

    }, 
    iniciar : function(component, event, helper) {
        component.set("v.puntos", 0);
        var action = component.get("c.getNumeroAleatorio");
        action.setParams({
            "numeroDiferente" : 0
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var numero = response.getReturnValue();
                var event = $A.get("e.c:mirarTopo");
                event.setParams({
                    "numeroTopo" : numero
                });
                event.fire();
                var topo = component.find(numero);
                topo.iniciarFiesta();
                component.set("v.topoActivo", numero);
            }
        });
        $A.enqueueAction(action);
    }, 
    golpearTopo : function(component, event, helper) {
        if (event.getParam("acertar")) {
            var puntosActuales = component.get("v.puntos");
            component.set("v.puntos", puntosActuales + 1);
        } else {
            component.set("v.puntos", 0);
        }
        console.log("Puntos: " + component.get("v.puntos"));
        var action = component.get("c.getNumeroAleatorio");
        var numeroTopoActivo = component.get("v.topoActivo");
        action.setParams({
            "numeroDiferente" : numeroTopoActivo
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var numero = response.getReturnValue();
                var event = $A.get("e.c:mirarTopo");
                event.setParams({
                    "numeroTopo" : numero
                });
                event.fire();
                var topo = component.find(numero);
                topo.iniciarFiesta();
                component.set("v.topoActivo", numero);
            }
        });
        $A.enqueueAction(action);
    }, 
    almacenarPuntos : function(component, event, helper) {
        var puntos = component.get("v.puntos");
        var puntosLista = component.get("v.puntosLista");
        puntosLista.push(puntos);
        component.set("v.puntosLista", puntosLista);
        component.set("v.puntos", 0);
    }
})

public with sharing class numeroAleatorio {
    
    @AuraEnabled
    public static Integer getNumeroAleatorio(Integer numeroDiferente){
        // Coge un número aleatorio del 1 al 8 diferente del numeroDiferente y lo devuelve
        Integer numeroAleatorio = numeroDiferente;
        while (numeroAleatorio == numeroDiferente){
            numeroAleatorio = Integer.valueOf(Math.floor(Math.random() * 8) + 1);
        }
        return numeroAleatorio;
    }
}
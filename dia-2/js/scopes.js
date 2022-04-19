"use strict";

//SCOPES
//Se puede acceder de dentro a fuera a variables globales, pero no al revés. Por eso se pasan los valores de dentro a variables de fuera, para poder ser accesibles.

//var declara las variables a nivel global aunque se declaren dentro
//por eso se usan let y const

const a = 5;

{
  console.log(a);
  {
    console.log(a);
    {
      console.log(a);
    }
  }
}

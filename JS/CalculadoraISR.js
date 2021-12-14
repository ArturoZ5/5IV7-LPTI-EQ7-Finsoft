const calc = (e) => {
    
}
function CalcularISR(e)
{
    
//Variables
var menu, otro;

var lim = 0;
var porcent = 0;
var cuota=0;
var subsidio=0;

let sueldo = document.getElementById('Ingresos').value;

{

//Parte Uno
if(sueldo>=0.01&&sueldo<=318.00)
{

lim = 0.01;
porcent = .0192;
cuota = 0;
}
//Parte Dos
if(sueldo>=318.01&&sueldo<=2699.40)
{
lim = 318.01;
porcent = .0640;
cuota = 6.15;
}
//Parte Tres
if(sueldo>=2699.41&&sueldo<=4744.05)
{
lim = 2699.41;
porcent = .1088;
cuota = 158.55;
}
//Parte Cuatro
if(sueldo>=4744.06&&sueldo<=5514.75)
{
lim = 4744.06;
porcent = .16;
cuota = 381.00;
}
//Parte Cinco
if(sueldo>=5514.76&&sueldo<=6602.70)
{
lim = 5514.76;
porcent = .1792; 
cuota = 504.30;
}
//Parte Seis
if(sueldo>=6602.71&&sueldo<=13316.70)
{
lim = 6602.71;
porcent = .2136;
cuota = 699.30;
}

//Parte Siete
if(sueldo>=13316.71&&sueldo<=20998.90)
{
lim = 13316.71;
porcent = .2352;
cuota = 2133.30;
}

//Parte Ocho

if(sueldo>=20998.91&&sueldo<=40071.30)
{
lim = 20998.91;
porcent = .30;
cuota = 3937.80;
}

//Parte Nueve

if(sueldo>=40071.31&&sueldo<=53428.30)
{
lim = 40071.31;
porcent = .32;
cuota = 9662.55;
}

//Parte Diez

if(sueldo>=53428.31&&sueldo<=160285.35)
{
lim = 53428.31;
porcent = .34;
cuota = 13936.80;
}

//Parte Once

if(sueldo>=160285.36)
{
lim = 160285.36;
porcent = .35;
cuota = 50268.15;
}

//Checa si Tiene SubSidio al Empleo

if(sueldo>=.01)
{

if(sueldo>=0.01&&sueldo<=872.85){ subsidio = 200.85; }
if(sueldo>=872.86&&sueldo<=1309.20){ subsidio = 200.70; }
if(sueldo>=1309.21&&sueldo<=1713.60){ subsidio = 200.70; }
if(sueldo>=1713.61&&sueldo<=1745.70){ subsidio = 193.80; }
if(sueldo>=1745.71&&sueldo<=2193.75){ subsidio =188.70 ; }
if(sueldo>=2193.76&&sueldo<=2327.55){ subsidio = 174.75; }
if(sueldo>=2327.56&&sueldo<=2632.65){ subsidio =160.35 ; }
if(sueldo>=2632.66&&sueldo<=3061.40){ subsidio =145.35 ; }
if(sueldo>=3071.41&&sueldo<=3510.15){ subsidio = 125.10; }
if(sueldo>=3510.16&&sueldo<=3642.60){ subsidio =107.40 ; }
if(sueldo>=3642.61){ subsidio =0 ; }

 

}

//Fin Checa Si tiene SubSidio al Empleo

//Calculo




}


const button = document.getElementById('calcular');
document.getElementById('inf').value = lim;
document.getElementById('excinf').value = sueldo - lim;
document.getElementById('fija').value = cuota;
document.getElementById('sub').value = subsidio;
document.getElementById('dev').value = sueldo - (sueldo * porcent);
button.addEventListener('click',  e => {
    e.preventDefault();
    alert('caca');
});
}
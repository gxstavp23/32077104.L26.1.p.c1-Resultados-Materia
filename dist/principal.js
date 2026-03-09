import Cl_estudiante from "./Cl_estudiante.js";
import Cl_materia from "./Cl_materia.js";
const estud1 = new Cl_estudiante("888", 60);
const estud2 = new Cl_estudiante("777", 50);
const estud3 = new Cl_estudiante("999", 40);
const estud4 = new Cl_estudiante("333", 80);
const estud5 = new Cl_estudiante("111", 30);
const estud6 = new Cl_estudiante("666", 90);
const estud7 = new Cl_estudiante("444", 48);
const estud8 = new Cl_estudiante("222", 60);
const materia = new Cl_materia();
materia.procesarEstudiante(estud1);
materia.procesarEstudiante(estud2);
materia.procesarEstudiante(estud3);
materia.procesarEstudiante(estud4);
materia.procesarEstudiante(estud5);
materia.procesarEstudiante(estud6);
materia.procesarEstudiante(estud7);
materia.procesarEstudiante(estud8);
let body = document.getElementById("salida");
if (body)
    body.innerHTML = `Cantidad de estudiantes aprobados:${materia.totalAprobados()}
<br> Cantidad de estudiantes reprobados:${materia.totalReprobados()}
<br><br>Nota promedio de la sección: ${materia.promedioSeccion()} `;

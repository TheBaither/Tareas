const session = pl.create(1000); //Límite

//Programa Prolog
const programa = `
alumno(ana_ruiz,programacion_ba,80).
alumno(ana_ruiz,programacion_int,73).
alumno(juan_cyto,programacion_ba,75).
alumno(juan_cyto,programacion_int,53).
nombres(LF):-findall(I,alumnos(I),LF), write(LF).
alumnos(X):-alumno(X,Y,Z).
programacion_int(X):-aprobaste_ba(X).
programacion_avan(X):-aprobaste_int(X).
calificacion_ba(X,Z):-alumno(X,programacion_ba,Z).
calificacion_int(X,Z):-alumno(X,programacion_int,Z).
aprobaste_ba(X):-alumno(X,programacion_ba,Z),write('tu calificaion es de: '),write(Z),Z>=70.
aprobaste_int(X):-alumno(X,programacion_int,Z),write('Tu calificacion es de: '),write(Z),Z>=70.
`;

session.consult(programa);

function alumnos() {
    const consulta = "nombres(X).";
    session.query(consulta);
    respuesta();
}
function calificaciones_ba() {
    const consulta = "aprobaste_ba(ana_ruiz).";
    session.query(consulta);
    respuesta();
}
function calificaciones() {
    const consulta = "calificacion_ba(ana_ruiz,Z).";
    session.query(consulta);
    respuesta();
}
function calificaciones_int() {
    const consulta = "aprobaste_int(ana_ruiz).";
    session.query(consulta);
    respuesta();
}
function calificaciones_ba_juan() {
    const consulta = "aprobaste_ba(juan_cyto).";
    session.query(consulta);
    respuesta();
}
function calificaciones_int_juan() {
    const consulta = "aprobaste_int(juan_cyto)."
    session.query(consulta);
    respuesta();
}
function puede_ana() {
    const consulta = "programacion_avan(ana_ruiz).";
    session.query(consulta);
    respuesta();
}
function puede_juan() {
    const consulta = "programacion_avan(juan_cyto).";
    session.query(consulta);
    respuesta();
}
function calificaciones_juan() {
    const consulta = "calificacion_int(juan_cyto,Z).";
    session.query(consulta);
    respuesta();
}

function respuesta(x){
    session.answers(x => {
        if (x) {
        document.getElementById("resultado").innerHTML += 
            `<p>${pl.format_answer(x)}</p>`;
        } else {
        document.getElementById("resultado").innerHTML += 
            "<p>✅ Consulta terminada.</p>";
        }
    });
}
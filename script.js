const cursos = [
  // I SEM
  { codigo: "IN1001C", nombre: "Álgebra", semestre: 1, requisitos: [] },
  { codigo: "IN1002C", nombre: "Cálculo I", semestre: 1, requisitos: [] },
  { codigo: "IN1041C", nombre: "Introducción a la Ingeniería Civil", semestre: 1, requisitos: [] },
  { codigo: "TE0007C", nombre: "Fundamentos Filosóficos", semestre: 1, requisitos: [] },
  
  // II SEM
  { codigo: "IN1004C", nombre: "Álgebra Lineal", semestre: 2, requisitos: ["IN1001C"] },
  { codigo: "IN1005C", nombre: "Cálculo II", semestre: 2, requisitos: ["IN1002C"] },
  { codigo: "IN1047C", nombre: "Dibujo en Ingeniería", semestre: 2, requisitos: ["IN1041C"] },
  { codigo: "IN1048C", nombre: "Fundamentos de Estática", semestre: 2, requisitos: ["IN1002C"] },
  { codigo: "CS0002C", nombre: "Química", semestre: 2, requisitos: [] },

  // III SEM
  { codigo: "IN1009C", nombre: "Cálculo III", semestre: 3, requisitos: ["IN1005C"] },
  { codigo: "IN1068C", nombre: "Electromagnetismo y Circuitos", semestre: 3, requisitos: ["IN1005C","IN1048C"] },
  { codigo: "IN1106C", nombre: "Estática Aplicada", semestre: 3, requisitos: ["IN1005C","IN1048C"] },
  { codigo: "IN1107C", nombre: "Materiales de Construcción", semestre: 3, requisitos: ["IN1047C"] },
  { codigo: "IN1108C", nombre: "Programación Aplicada", semestre: 3, requisitos: ["IN1005C"] },
 
  // IV SEM
  { codigo: "IN1008C", nombre: "Ecuaciones Diferenciales", semestre: 4, requisitos: ["IN1005C","IN1004C"] },
  { codigo: "IN1052C", nombre: "Cálculo Numérico", semestre: 4, requisitos: ["IN1005C","IN1108C"] },
  { codigo: "IN1109C", nombre: "Cinemática y Dinámica", semestre: 4, requisitos: ["IN1005C","IN1048C"] },
  { codigo: "IN1110C", nombre: "Topografía", semestre: 4, requisitos: ["IN1047C"] },
  { codigo: "TE0008C", nombre: "Fundamentos Teológicos", semestre: 4, requisitos: ["TE0007C"] },

  // V SEM
  { codigo: "IN1062C", nombre: "Probabilidades y Estadística", semestre: 5, requisitos: ["IN1005C"] },
  { codigo: "IN1066C", nombre: "Termodinámica", semestre: 5, requisitos: ["CS0002C","IN1048C"] },
  { codigo: "IN1111C", nombre: "Energías y Ondas", semestre: 5, requisitos: ["IN1109C"] },
  { codigo: "IN1112C", nombre: "Resistencia de Materiales", semestre: 5, requisitos: ["IN1106C","IN1008C"] },
  { codigo: "TE0009C", nombre: "Doctrina Social de la Iglesia", semestre: 5, requisitos: ["TE0008C"] },
  
  // VI SEM
  { codigo: "IN1018C", nombre: "Mecánica de Fluidos", semestre: 6, requisitos: ["IN1109C","IN1066C"] },
  { codigo: "IN1051C", nombre: "Análisis de Estructuras", semestre: 6, requisitos: ["IN1112C"] },
  { codigo: "IN1063C", nombre: "Optimización", semestre: 6, requisitos: ["IN1004C"] },
  { codigo: "IN1113C", nombre: "Geología", semestre: 6, requisitos: ["CS0002C"] },
  { codigo: "TE0010C", nombre: "Ética Empresarial y Social", semestre: 6, requisitos: ["TE0009C"] },
  
  // VII SEM
  { codigo: "EC0001C", nombre: "Economía y Gestión Empresarial", semestre: 7, requisitos: [] },
  { codigo: "ED0021C", nombre: "Inglés I", semestre: 7, requisitos: [] },
  { codigo: "IN1017C", nombre: "Mecánica de Suelos", semestre: 7, requisitos: ["IN1113C"] },
  { codigo: "IN1114C", nombre: "Hidráulica", semestre: 7, requisitos: ["IN1018C"] },
  { codigo: "IN1115C", nombre: "Dinámica de Estructuras", semestre: 7, requisitos: ["IN1051C","IN1109C"] },
  
  // VIII SEM
  { codigo: "ED0022C", nombre: "Inglés II", semestre: 8, requisitos: ["ED0021C"] },
  { codigo: "IN1021C", nombre: "Hidrología", semestre: 8, requisitos: ["IN1114C","IN1062C"] },
  { codigo: "IN1116C", nombre: "Ingeniería de Transporte", semestre: 8, requisitos: ["IN1063C","EC0001C"] },
  { codigo: "IN1117C", nombre: "Construcción General", semestre: 8, requisitos: ["IN1110C"] },
  { codigo: "IN1118C", nombre: "Hormigón Armado", semestre: 8, requisitos: ["IN1051C"] },

  // IX SEM
  { codigo: "IN1119C", nombre: "Ingeniería Fluvial y Costera", semestre: 9, requisitos: ["IN1114C","IN1111C"] },
  { codigo: "IN1120C", nombre: "Fundaciones", semestre: 9, requisitos: ["IN1017C"] },
  { codigo: "IN1121C", nombre: "Estructuras Metálicas", semestre: 9, requisitos: ["IN1051C"] },
  { codigo: "INTEI", nombre: "Integración de Saberes", semestre: 9, requisitos: [] },
  { codigo: "OPT1", nombre: "Optativo de Profundización I", semestre: 9, requisitos: [] },
  
  // X SEM
  { codigo: "IN1033C", nombre: "Ingeniería Económica", semestre: 10, requisitos: [] },
  { codigo: "IN1122C", nombre: "Impacto Ambiental en Ingeniería Civil", semestre: 10, requisitos: [] },
  { codigo: "INTEII", nombre: "Integración de Saberes II", semestre: 10, requisitos: [] },
  { codigo: "OPT2", nombre: "Optativo de Profundización II", semestre: 10, requisitos: [] },
  { codigo: "OPT3", nombre: "Optativo de Profundización III", semestre: 10, requisitos: [] },
  
  // Verano (Práctica)
  { codigo: "IN1126C", nombre: "Práctica Profesional", semestre: 0, requisitos: [] },
  
  // XI SEM
  { codigo: "IN1123C", nombre: "Evaluación de Proyectos", semestre: 11, requisitos: ["IN1033C"] },
  { codigo: "IN1124C", nombre: "Planificación y Control de Obras", semestre: 11, requisitos: ["IN1117C"] },
  { codigo: "OPT4", nombre: "Optativo de Profundización IV", semestre: 11, requisitos: [] },
  { codigo: "OPT5", nombre: "Optativo de Profundización V", semestre: 11, requisitos: [] },
  { codigo: "OPT6", nombre: "Optativo de Profundización VI", semestre: 11, requisitos: [] },

  // XII SEM
  { codigo: "IN1125C", nombre: "Proyecto de Título", semestre: 12, requisitos: ["IN1123C"] },
];
// === CONTENEDORES POR SEMESTRE ===
const malla = document.getElementById("malla");
const estadoCursos = {};
const contenedores = {};

// Crear los 12 semestres
for (let i = 1; i <= 12; i++) {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";
  semestreDiv.setAttribute("data-semestre", i);
  malla.appendChild(semestreDiv);
  contenedores[i] = semestreDiv;
}

// Crear contenedor especial Verano (Práctica)
const veranoDiv = document.createElement("div");
veranoDiv.className = "semestre";
veranoDiv.setAttribute("data-semestre", "Verano");
malla.appendChild(veranoDiv);
contenedores[0] = veranoDiv;

// === UBICAR CADA RAMO ===
cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = curso.codigo;
  div.innerText = `${curso.nombre}\n(${curso.codigo})`;

  // Guardar su estado (bloqueado o desbloqueado)
  estadoCursos[curso.codigo] = { completado: false, div: div };

  // Insertar en su semestre correspondiente
  contenedores[curso.semestre].appendChild(div);
});

// === DESBLOQUEAR LOS QUE NO TIENEN REQUISITOS ===
cursos.forEach(curso => {
  if (curso.requisitos.length === 0) {
    desbloquear(curso.codigo);
  }
});

// === FUNCIONES ===

// Desbloquear ramo
function desbloquear(codigo) {
  const ramo = estadoCursos[codigo];
  ramo.div.classList.remove("bloqueado");
  ramo.div.addEventListener("click", () => marcarCompletado(codigo));
}

// Marcar como completado y desbloquear dependientes
function marcarCompletado(codigo) {
  const ramo = estadoCursos[codigo];
  if (ramo.div.classList.contains("bloqueado") || ramo.completado) return;

  ramo.completado = true;
  ramo.div.classList.add("tachado");

  cursos.forEach(curso => {
    if (curso.requisitos.includes(codigo)) {
      // Si todos sus requisitos están completados, desbloquear
      if (curso.requisitos.every(req => estadoCursos[req].completado)) {
        desbloquear(curso.codigo);
      }
    }
  });
}


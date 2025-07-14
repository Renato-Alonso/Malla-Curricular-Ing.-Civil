const cursos = [
  // I SEM
  { codigo: "IN1001C", nombre: "Cálculo I", semestre: 1, requisitos: [] },
  { codigo: "IN1002C", nombre: "Álgebra", semestre: 1, requisitos: [] },
  { codigo: "CS0002C", nombre: "Química", semestre: 1, requisitos: [] },
  { codigo: "IN1041C", nombre: "Introducción a la Ingeniería Civil", semestre: 1, requisitos: [] },
  { codigo: "TE0007C", nombre: "Fundamentos Teológicos", semestre: 1, requisitos: [] },

  // II SEM
  { codigo: "IN1004C", nombre: "Cálculo II", semestre: 2, requisitos: ["IN1001C"] },
  { codigo: "IN1005C", nombre: "Álgebra Lineal", semestre: 2, requisitos: ["IN1002C"] },
  { codigo: "IN1062C", nombre: "Probabilidades y Estadística", semestre: 2, requisitos: ["IN1001C"] },
  { codigo: "IN1068C", nombre: "Cinemática y Dinámica", semestre: 2, requisitos: ["IN1001C"] },
  { codigo: "IN1017C", nombre: "Dibujo en Ingeniería", semestre: 2, requisitos: [] },

  // III SEM
  { codigo: "IN1008C", nombre: "Cálculo Numérico", semestre: 3, requisitos: ["IN1004C"] },
  { codigo: "IN1009C", nombre: "Electromagnetismo y Circuitos", semestre: 3, requisitos: ["IN1004C"] },
  { codigo: "IN1047C", nombre: "Estática Aplicada", semestre: 3, requisitos: ["IN1068C"] },
  { codigo: "IN1048C", nombre: "Fundamentos de Estática", semestre: 3, requisitos: [] },
  { codigo: "IN1052C", nombre: "Termodinámica", semestre: 3, requisitos: ["IN1004C"] },

  // IV SEM
  { codigo: "IN1051C", nombre: "Ecuaciones Diferenciales", semestre: 4, requisitos: ["IN1004C"] },
  { codigo: "IN1066C", nombre: "Optimización", semestre: 4, requisitos: ["IN1004C"] },
  { codigo: "IN1106C", nombre: "Materiales de Construcción", semestre: 4, requisitos: ["IN1048C"] },
  { codigo: "IN1107C", nombre: "Estática Aplicada II", semestre: 4, requisitos: ["IN1047C"] },
  { codigo: "IN1108C", nombre: "Energías y Ondas", semestre: 4, requisitos: ["IN1052C"] },

  // V SEM
  { codigo: "IN1109C", nombre: "Mecánica de Fluidos", semestre: 5, requisitos: ["IN1051C"] },
  { codigo: "IN1110C", nombre: "Mecánica de Suelos", semestre: 5, requisitos: ["IN1066C"] },
  { codigo: "IN1111C", nombre: "Resistencia de Materiales", semestre: 5, requisitos: ["IN1047C"] },
  { codigo: "IN1112C", nombre: "Geología", semestre: 5, requisitos: [] },
  { codigo: "TE0008C", nombre: "Fundamentos Filosóficos", semestre: 5, requisitos: [] },

  // VI SEM
  { codigo: "IN1113C", nombre: "Análisis de Estructuras", semestre: 6, requisitos: ["IN1111C"] },
  { codigo: "IN1114C", nombre: "Programación Aplicada", semestre: 6, requisitos: [] },
  { codigo: "IN1115C", nombre: "Hidráulica", semestre: 6, requisitos: ["IN1109C"] },
  { codigo: "IN1116C", nombre: "Topografía", semestre: 6, requisitos: [] },
  { codigo: "TE0009C", nombre: "Doctrina Social de la Iglesia", semestre: 6, requisitos: [] },

  // VII SEM
  { codigo: "IN1117C", nombre: "Inglés I", semestre: 7, requisitos: [] },
  { codigo: "IN1118C", nombre: "Economía y Gestión Empresarial", semestre: 7, requisitos: [] },
  { codigo: "IN1119C", nombre: "Ingeniería Económica", semestre: 7, requisitos: ["IN1118C"] },
  { codigo: "IN1120C", nombre: "Fundaciones", semestre: 7, requisitos: ["IN1110C"] },
  { codigo: "IN1121C", nombre: "Estructuras Metálicas", semestre: 7, requisitos: ["IN1113C"] },

  // VIII SEM
  { codigo: "IN1122C", nombre: "Impacto Ambiental en Ingeniería Civil", semestre: 8, requisitos: ["IN1115C"] },
  { codigo: "IN1123C", nombre: "Evaluación de Proyectos", semestre: 8, requisitos: ["IN1119C"] },
  { codigo: "IN1124C", nombre: "Planificación y Control de Obras", semestre: 8, requisitos: ["IN1106C"] },
  { codigo: "OPT1", nombre: "Optativo de Profundización I", semestre: 8, requisitos: [] },

  // IX SEM
  { codigo: "OPT2", nombre: "Optativo de Profundización II", semestre: 9, requisitos: [] },
  { codigo: "OPT3", nombre: "Optativo de Profundización III", semestre: 9, requisitos: [] },

  // X SEM
  { codigo: "OPT4", nombre: "Optativo de Profundización IV", semestre: 10, requisitos: [] },
  { codigo: "OPT5", nombre: "Optativo de Profundización V", semestre: 10, requisitos: [] },
  
// Verano (Práctica)
  { codigo: "IN1126C", nombre: "Práctica Profesional", semestre: 0, requisitos: [] },
  
  // XI SEM
  { codigo: "OPT6", nombre: "Optativo de Profundización VI", semestre: 11, requisitos: [] },
  { codigo: "OPT7", nombre: "Optativo de Profundización VII", semestre: 11, requisitos: [] },

  // XII SEM
  { codigo: "IN1125C", nombre: "Proyecto de Título", semestre: 12, requisitos: ["IN1123C"] },
  
];

// Contenedores por semestre
const malla = document.getElementById("malla");
const estadoCursos = {};
const contenedores = {};

for (let i = 1; i <= 12; i++) {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";
  semestreDiv.setAttribute("data-semestre", i);
  malla.appendChild(semestreDiv);
  contenedores[i] = semestreDiv;
}

// Verano
const veranoDiv = document.createElement("div");
veranoDiv.className = "semestre";
veranoDiv.setAttribute("data-semestre", "Verano");
malla.appendChild(veranoDiv);
contenedores[0] = veranoDiv;

// Crear cursos
cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = curso.codigo;
  div.innerText = `${curso.nombre}\n(${curso.codigo})`;

  estadoCursos[curso.codigo] = { completado: false, div: div };
  contenedores[curso.semestre].appendChild(div);
});

// Desbloquear iniciales
cursos.forEach(curso => {
  if (curso.requisitos.length === 0) {
    desbloquear(curso.codigo);
  }
});

function desbloquear(codigo) {
  const ramo = estadoCursos[codigo];
  ramo.div.classList.remove("bloqueado");
  ramo.div.addEventListener("click", () => marcarCompletado(codigo));
}

function marcarCompletado(codigo) {
  const ramo = estadoCursos[codigo];
  if (ramo.div.classList.contains("bloqueado") || ramo.completado) return;

  ramo.completado = true;
  ramo.div.classList.add("tachado");

  cursos.forEach(curso => {
    if (curso.requisitos.includes(codigo)) {
      if (curso.requisitos.every(req => estadoCursos[req].completado)) {
        desbloquear(curso.codigo);
      }
    }
  });
}

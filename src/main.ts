import { dibujarPreguntasRespuestasH } from './preguntandoH/preguntandoH';

import './style.css';

const divApp = document.querySelector<HTMLDivElement>('#app')!;

dibujarPreguntasRespuestasH(divApp);
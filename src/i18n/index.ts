// src/i18n/index.ts
// Los textos de la invitación, agrupados por sección en es.ts.
// Cada componente pide los suyos: const t = textos().nombreDeLaSeccion

import { es } from "./es";

export type Textos = typeof es;

/** Los textos de la invitación (solo español) */
export function textos(): Textos {
    return es;
}

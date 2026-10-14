// src/i18n/es.ts
// Los textos de la invitación. Los nombres de personas, la parroquia, el
// número de cuenta y los enlaces viven en cada componente.

export const es = {
    // ── Portada ──────────────────────────────────────────────
    portada: {
        union: "y",
        indicacion: [
            "Presiona el sello del sobre",
            "para abrir la invitación",
        ],
    },

    // ── Foto enmarcada ───────────────────────────────────────
    foto: {
        alt: "Los novios abrazados en el jardín",
    },

    // ── ¡Nos casamos! ────────────────────────────────────────
    nosCasamos: {
        titulo: "¡Nos casamos!",
        bendicion: [
            "Con la bendición de Dios, de nuestros padres",
            "y en compañía de nuestros padrinos",
        ],
        invitacion:
            "Tenemos el honor de invitarte a celebrar " +
            "el inicio de nuestra nueva etapa, " +
            "donde el amor nos une y la felicidad nos acompaña.",
        cierre: "¡Te esperamos!",
        altFoto: "Los novios a punto de besarse",
    },

    // ── Versículos ───────────────────────────────────────────
    versiculo: {
        texto:
            "Todo tiene su tiempo, y todo lo que se quiere " +
            "debajo del cielo tiene su hora.",
        cita: "Eclesiastés 3:1",
    },
    versiculo2: {
        texto: "El amor no pasará jamás.",
        cita: "1 Corintios 13:8",
    },

    // ── Fecha ────────────────────────────────────────────────
    fecha: {
        anuncio: "¡Nos Casamos!",
        hora: "15:00 hrs",
        diasSemana: ["D", "L", "M", "M", "J", "V", "S"],
        nombresDia: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
        nombresMes: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        // "Sábado 16 de Octubre"
        formatoFecha: "{dia} {numero} de {mes}",
    },

    // ── Cuenta regresiva ─────────────────────────────────────
    contador: {
        titulo: "Falta poco",
        dias: "Días",
        horas: "Hrs.",
        minutos: "Min.",
        segundos: "Seg.",
    },

    // ── Mensaje ──────────────────────────────────────────────
    mensaje: ["Compartir esos momentos con", "ustedes los hace inolvidables"],

    // ── Padres ───────────────────────────────────────────────
    padres: {
        bendicion: ["Con la bendición de Dios", "y de nuestros padres"],
        padresNovia: "Padres de la novia",
        padresNovio: "Padres del novio",
        cierre: [
            "Nos complace invitarles a",
            "compartir con nosotros",
            "este día tan especial.",
        ],
    },

    // ── Padrinos ─────────────────────────────────────────────
    padrinos: {
        titulo: "Nuestros Padrinos",
        religion: "Padrinos de Religión",
        civil: "Padrinos de Civil",
    },

    // ── Ceremonia religiosa ──────────────────────────────────
    ceremonia: {
        titulo: "Ceremonia Religiosa",
        rotulo: "Parroquia",
        direccion: ["Av. Libertador esquina calle Los Álamos", "( Zona Norte )"],
        textoBoton: "Ver mapa",
    },

    // ── Recepción ────────────────────────────────────────────
    recepcion: {
        titulo: "Recepción Social",
        salon: ["SALÓN DE EVENTOS", "“LA HACIENDA”"],
        direccion: [
            "Calle Los Jazmines #567",
            "( Frente al Parque Principal )",
        ],
        textoBoton: "Ver mapa",
    },

    // ── Código de vestimenta ─────────────────────────────────
    vestimenta: {
        titulo: "Código de Vestimenta",
        etiqueta: "FORMAL",
        damas: "Damas",
        damasDetalle: "Vestido largo",
        caballeros: "Caballeros",
        caballerosDetalle: "Traje elegante",
        nota: [
            "Por cariño a la novia el vestido",
            "de color blanco está reservado",
            "para la novia",
        ],
    },

    // ── Cronograma ───────────────────────────────────────────
    cronograma: {
        titulo: "Cronograma",
        momentos: [
            ["Ceremonia Religiosa"],
            ["Ceremonia Civil en", "el Salón"],
            ["Brindis"],
            ["Vals de Novios"],
            ["Recepción Social"],
            ["Cena"],
            ["Corte de Torta", "y Lanzamiento", "de Bouquet"],
            ["Despedida"],
        ],
    },

    // ── Puntualidad ──────────────────────────────────────────
    puntualidad: {
        inicio: "Tu puntualidad es",
        resalte1: "clave",
        medio: "para que todo salga como lo",
        resalte2: "soñamos",
        final: ".",
    },

    // ── Sugerencia de regalo ─────────────────────────────────
    regalo: {
        titulo: "Sugerencia de Regalo",
        texto: [
            "Tu presencia es el mejor regalo para compartir",
            "este momento único. Ya tenemos nuestra casita",
            "completa, nuestro ferrari y el yate, ¡solo nos",
            "falta pagarlo! Como sugerencia de regalo te",
            "dejamos el siguiente QR.",
        ],
        rotuloQr: "TRANSFERENCIA QR",
        altQr: "Código QR para transferencia",
        altFoto: "Los novios juntos en el jardín",
    },

    // ── Pase y confirmación ──────────────────────────────────
    pase: {
        reservado: "Hemos reservado",
        honor: "en tu honor",
        pase: "pase",
        pases: "pases",
        tituloConfirmar: "Confirmación de Asistencia",
        aviso: [
            "Tu presencia es muy importante, no",
            "olvides confirmar tu asistencia.",
        ],
        textoBoton: "Confirmar Asistencia",
    },

    // ── Nuestra historia ─────────────────────────────────────
    historia: {
        titulo: "Nuestra historia",
        primero: [
            "Nos conocimos de niños, crecimos,",
            "tomamos caminos distintos y la vida",
            "volvió a encontrarnos.",
        ],
        segundoInicio: "Hoy, aquellos niños",
        segundoResalte: "se eligen para siempre.",
    },

    // ── Despedida ────────────────────────────────────────────
    despedida: {
        gracias: ["Gracias a Dios por permitirnos este", "día.", "¡No falten!"],
        anuncio: "NUESTRA BODA",
    },
};

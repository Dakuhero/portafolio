// Vector de imagenes
const images = [
    "#ai_e",
    "#ps_e",
    "#pr_e",
    "#Ae_e",
    "#An_e",
    "#Csp_e",
    "#Control_e",
    "#Lapiz_e",
    "#Texto_e",
    "#Manga_e",
    "#Video_e",
    "#Ai_in_e",
    "#Ps_in_e",
    "#Audifonos_e",
]

// Cuente desde 0 hasta la ultima posicion del vector de imagenes contando 1 a 1
for (let posicionDelVector = 0; posicionDelVector < images.length; posicionDelVector++) {
    $(images[posicionDelVector]).fadeTo(0, 0);
}


$(window).on("load", () => {
    $('.preloader').fadeOut('slow');
});

function show(elemento) {
    $(elemento).fadeTo(0, 1);
}

function hide(elemento) {
    $(elemento).fadeTo(0, 0);
}

/// Para las de arriba
function ver(elemento, mostrar, mostrar2) {
    $(elemento).mouseenter(() => {
        hide("#ai_n");
        hide("#ps_n");
        hide("#pr_n");
        hide("#ai_e");
        hide("#ps_e");
        hide("#pr_e");
        show(mostrar);

        if (window.matchMedia('(min-width: 1200px)').matches) {
            if (elemento != mostrar2) {
                show(mostrar2);
            }
        }

    });
}

function ocultar(elemento) {
    $(elemento).mouseout(() => {
        show("#ai_n");
        show("#ps_n");
        show("#pr_n");
        hide("#ai_e");
        hide("#ps_e");
        hide("#pr_e");
    });
}
/// -
/// Para las del medio
function ver_md(elemento_md, mostrar_md, mostrar2_md) {
    $(elemento_md).mouseenter(() => {
        hide("#Ae_n");
        hide("#An_n");
        hide("#Csp_n");
        hide("#Ae_e");
        hide("#An_e");
        hide("#Csp_e");
        show(mostrar_md);

        if (window.matchMedia('(min-width: 1200px)').matches) {
            if (elemento_md != mostrar2_md) {
                show(mostrar2_md);
            }
        }
    });
}

function ocultar_md(elemento_md) {
    $(elemento_md).mouseout(() => {
        show("#Ae_n");
        show("#An_n");
        show("#Csp_n");
        hide("#Ae_e");
        hide("#An_e");
        hide("#Csp_e");
    });
}

/// Para las de abajo superior
function ver_in_s(elemento_in_s, mostrar_in_s, mostrar2_in_s, mostrar3_in_s) {
    $(elemento_in_s).mouseenter(() => {
        hide("#Control_n");
        hide("#Lapiz_n");
        hide("#Texto_n");
        hide("#Manga_n");
        hide("#Control_e");
        hide("#Lapiz_e");
        hide("#Texto_e");
        hide("#Manga_e");
        show(mostrar_in_s);

        if (window.matchMedia('(max-width: 1200px)').matches) {
            if (elemento_in_s != mostrar2_in_s)
                show(mostrar2_in_s);
            else
                show(mostrar3_in_s);
        }
        if (window.matchMedia('(min-width: 100px)').matches) {
            if (elemento_in_s === "#Control_n")
                hide("#Manga_n");
            if (elemento_in_s === "#Lapiz_n")
                show("#Control_n");
            if (elemento_in_s === "#Texto_n")
                show("#Manga_n");
            if (elemento_in_s === "#Manga_n")
                hide("#Control_n");
        }
        if (window.matchMedia('(min-width: 1201px)').matches) {
            if (elemento_in_s === "#Control_n")
                show("#Manga_n");
            if (elemento_in_s === "#Manga_n")
                show("#Control_n");
        }

    });
}

function ocultar_in_s(elemento_in_s) {
    $(elemento_in_s).mouseout(() => {
        show("#Control_n");
        show("#Lapiz_n");
        show("#Texto_n");
        show("#Manga_n");
        hide("#Control_e");
        hide("#Lapiz_e");
        hide("#Texto_e");
        hide("#Manga_e");
    });
}

/// Para las de abajo inferior
function ver_in_in(elemento_in_in, mostrar_in_in, mostrar2_in_in, mostrar3_in_in) {
    $(elemento_in_in).mouseenter(() => {
        hide("#Video_n");
        hide("#Ai_in_n");
        hide("#Ps_in_n");
        hide("#Audifonos_n");
        hide("#Video_e");
        hide("#Ai_in_e");
        hide("#Ps_in_e");
        hide("#Audifonos_e");
        show(mostrar_in_in);

        if (window.matchMedia('(max-width: 1200px)').matches) {
            if (elemento_in_in != mostrar2_in_in)
                show(mostrar2_in_in);
            else
                show(mostrar3_in_in);
        }
        if (window.matchMedia('(min-width: 100px)').matches) {
            if (elemento_in_in === "#Video_n")
                hide("#Audifonos_n");
            if (elemento_in_in === "#Ai_in_n")
                show("#Video_n");
            if (elemento_in_in === "#Ps_in_n")
                show("#Audifonos_n");
            if (elemento_in_in === "#Audifonos_n")
                hide("#Video_n");
        }
        if (window.matchMedia('(min-width: 1201px)').matches) {
            if (elemento_in_in === "#Video_n")
                show("#Audifonos_n");
            if (elemento_in_in === "#Audifonos_n")
                show("#Video_n");
        }
    });
}

function ocultar_in_in(elemento_in_in) {
    $(elemento_in_in).mouseout(() => {
        $("#Video_n").fadeTo(0, 1);
        $("#Ai_in_n").fadeTo(0, 1);
        $("#Ps_in_n").fadeTo(0, 1);
        $("#Audifonos_n").fadeTo(0, 1);
        $("#Video_e").fadeTo(0, 0);
        $("#Ai_in_e").fadeTo(0, 0);
        $("#Ps_in_e").fadeTo(0, 0);
        $("#Audifonos_e").fadeTo(0, 0);
    });
}



/// Acciones

/// Superior

ver("#ai_n", "#ai_e", "#pr_n");
ocultar("#ai_n");

ver("#ps_n", "#ps_e", "#ps_n");
ocultar("#ps_n");

ver("#pr_n", "#pr_e", "#ai_n");
ocultar("#pr_n");

/// Mediano

ver_md("#Ae_n", "#Ae_e", "#Csp_n");
ocultar_md("#Ae_n");

ver_md("#An_n", "#An_e", "#An_n");
ocultar_md("#An_n");

ver_md("#Csp_n", "#Csp_e", "#Ae_n");
ocultar_md("#Csp_n");

/// Abajo superior

ver_in_s("#Control_n", "#Control_e", "#Control_n", "#Manga_n");
ocultar_in_s("#Control_n");

ver_in_s("#Lapiz_n", "#Lapiz_e", "#Lapiz_n", "#Control_n");
ocultar_in_s("#Lapiz_n");

ver_in_s("#Texto_n", "#Texto_e", "#Texto_n", "#Manga_n");
ocultar_in_s("#Texto_n");

ver_in_s("#Manga_n", "#Manga_e", "#Manga_n", "#Control_n");
ocultar_in_s("#Manga_n");

/// Abajo inferior

ver_in_in("#Video_n", "#Video_e", "#Video_n", "#Audifonos_n");
ocultar_in_in("#Video_n");

ver_in_in("#Ai_in_n", "#Ai_in_e", "#Ai_in_n", "#Video_n");
ocultar_in_in("#Ai_in_n");

ver_in_in("#Ps_in_n", "#Ps_in_e", "#Ps_in_n", "#Audifonos_n");
ocultar_in_in("#Ps_in_n");

ver_in_in("#Audifonos_n", "#Audifonos_e", "#Audifonos_n", "#Video_n");
ocultar_in_in("#Audifonos_n");
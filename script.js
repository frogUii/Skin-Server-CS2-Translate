function cambiarContenido() {
    var seleccion = document.getElementById("menuDesplegable").value;
    var contenido = document.getElementById("contenido");

    switch (seleccion) {
        case "default":
            contenido.innerHTML = `<p>Selecciona una opción para ver el contenido.</p>`;
            break;
        case "ak47":
            contenido.innerHTML = `
            <p>Fire Serpent: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 180 0 0</strong><img class="icono" src="skins/ak47/serpent.webp" alt="skin"></p><br>
            <p>X-Ray: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1004 0 0</strong><img class="icono" src="skins/ak47/xray.webp" alt="skin"></p><br>
            <p>Head Shot: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1221 0 0</strong><img class="icono" src="skins/ak47/headshot.webp" alt="skin"></p><br>
            <p>Asimov: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 801 0 0</strong><img class="icono" src="skins/ak47/asimov.webp" alt="skin"></p><br>
            <p>Ice Coaled: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1143 0 0</strong><img class="icono" src="skins/ak47/ice.webp" alt="skin"></p><br>
            <p>Slate: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1035 0 0</strong><img class="icono" src="skins/ak47/slate.webp" alt="skin"></p><br>
            <p>Rat Rod: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 885 0 0</strong><img class="icono" src="skins/ak47/rat.webp" alt="skin"></p><br>
            <p>Nightwish: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1141 0 0</strong><img class="icono" src="skins/ak47/nightwish.webp" alt="skin"></p><br>
            <p>Phantom Disruptor: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 941 0 0</strong><img class="icono" src="skins/ak47/phantom.webp" alt="skin"></p><br>
            <p>Leet Museo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1087 0 0</strong><img class="icono" src="skins/ak47/museo.webp" alt="skin"></p><br>
            <p>Hydroponic: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 456 0 0</strong><img class="icono" src="skins/ak47/hydro.webp" alt="skin"></p><br>
            <p>Aquamarine: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 474 0 0</strong><img class="icono" src="skins/ak47/aqua.webp" alt="skin"></p><br>
            <p>Point Disarray: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 506 0 0</strong><img class="icono" src="skins/ak47/point.webp" alt="skin"></p><br>
            <p>Vulcan: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 302 0 0</strong><img class="icono" src="skins/ak47/vulcan.webp" alt="skin"></p><br>
            <p>Fuel Injector: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 524 0 0</strong><img class="icono" src="skins/ak47/injector.webp" alt="skin"></p><br>
            <p>The Empress: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 675 0 0</strong><img class="icono" src="skins/ak47/empress.webp" alt="skin"></p><br>
            <p>Redline: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 282 0 0</strong><img class="icono" src="skins/ak47/redline.webp" alt="skin"></p><br>
            <p>Panthera onca: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1018 0 0</strong><img class="icono" src="skins/ak47/panthera.webp" alt="skin"></p><br>
            <p>Bloodsport: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 639 0 0</strong><img class="icono" src="skins/ak47/blood.webp" alt="skin"></p><br>
            <p>Case Hardener: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 44 0 0</strong><img class="icono" src="skins/ak47/bluegem.webp" alt="skin"></p><br>
            <p>Orbit Mk01: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 656 0 0</strong><img class="icono" src="skins/ak47/orbit.webp" alt="skin"></p><br>
            <p>Wild Lotus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 724 0 0</strong><img class="icono" src="skins/ak47/lotus.webp" alt="skin"></p><br>
            <p>Legion of Anubis: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 959 0 0</strong><img class="icono" src="skins/ak47/anubis.webp" alt="skin"></p><br>
            <p>Neon Revolution: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 600 0 0</strong><img class="icono" src="skins/ak47/neonrevolution.webp" alt="skin"></p><br>
            <p>Neon Rider: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 707 0 0</strong><img class="icono" src="skins/ak47/neonrider.webp" alt="skin"></p><br>
            <p>Gold: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 921 0 0</strong><img class="icono" src="skins/ak47/gold.webp" alt="skin"></p><br>
            `;
            break;

        case "m4a1s":
            contenido.innerHTML = `
            <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 984 0 0</strong></p><br>
            <p>Welcome to the jungle: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1001 0 0</strong></p><br>
            <p>Player Two: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 946 0 0</strong></p><br>
            <p>Chantico's Fire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 548 0 0</strong></p><br>
            <p>Guardian: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 257 0 0</strong></p><br>
            <p>Control Panel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 792 0 0</strong></p><br>
            <p>Hyper Bestia: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 430 0 0</strong></p><br>
            <p>Mecha Industries: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 587 0 0</strong></p><br>
            <p>Blue Phosphor: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1017 0 0</strong></p><br>
            <p>Hot Rod: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 445 0 0</strong></p><br>
            <p>Leaded Glass: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 681 0 0</strong></p><br>
            <p>Master Piece: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 321 0 0</strong></p><br>
            <p>Danger: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1073 0 0</strong></p><br>
            <p>Golden Coil: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 497 0 0</strong></p><br>
            <p>Emphorosaur-S: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1223 0 0</strong></p><br>
            `;
            break;

        case "m4a4":
            contenido.innerHTML = `
                <p>Emperador: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 844 0 0</strong></p><br>
                <p>Howl: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 309 0 0</strong></p><br>
                <p>Asimov: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 255 0 0</strong></p><br>
                <p>Horus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1255 0 0</strong></p><br>
                <p>Global Offensive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 993 0 0</strong></p><br>
                <p>Otaku: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1228 0 0</strong></p><br>
                <p>Coalition Gold: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1063 0 0</strong></p><br>
                <p>Avispa: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 632 0 0</strong></p><br>
                <p>Hellfire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 664 0 0</strong></p><br>
                <p>Spider Lily: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1097 0 0</strong></p><br>
                <p>Evil Daimyo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 480 0 0</strong></p><br>
                <p>Desolate Space: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 588 0 0</strong></p><br>
                <p>Poseidon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 449 0 0</strong></p><br>
                <p>In Living Color: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1041 0 0</strong></p><br>
                <p>Paladin: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 512 0 0</strong></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 695 0 0</strong></p><br>
                <p>Tooth Fairy: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 971 0 0</strong></p><br>
                <p>Dragon King: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 400 0 0</strong></p><br>
                `;
            break;

        case "usp":
            contenido.innerHTML = `
                <p>Traitor: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1040 0 0</strong></p><br>
                <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1142 0 0</strong></p><br>
                <p>Monster: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 991 0 0</strong></p><br>
                <p>Kill Confirmed: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 504 0 0</strong></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 653 0 0</strong></p><br>
                <p>Cortex: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 705 0 0</strong></p><br>
                <p>Dead Silence: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1136 0 0</strong></p><br>
                <p>Azul: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 657 0 0</strong></p><br>
                <p>Blanca: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1065 0 0</strong></p><br>
                <p>Target: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1027 0 0</strong></p><br>
                <p>Road Rash: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 318 0 0</strong></p><br>
                <p>Caiman: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 339 0 0</strong></p><br>
            `;
            break;

        case "dk":
            contenido.innerHTML = `
                <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 962 0 0</strong></p><br>
                <p>Blaze: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 37 0 0</strong></p><br>
                <p>Sunset Storm 1: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 469 0 0</strong></p><br>
                <p>Sunset Storm 2: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 470 0 0</strong></p><br>
                <p>Night Heist: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1006 0 0</strong></p><br>
                <p>Fennec: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 764 0 0</strong></p><br>
                <p>Ocean Drive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1090 0 0</strong></p><br>
                <p>Esmeralda Jormungandr: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 757 0 0</strong></p><br>
                <p>Light Rail: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 841 0 0</strong></p><br>
                <p>Pilot: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 347 0 0</strong></p><br>
                <p>Code Red: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 711 0 0</strong></p><br>
                <p>Mecha Industrie: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 805 0 0</strong></p><br>
                <p>Storm: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 468 0 0</strong></p><br>
                <p>Rosita: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1050 0 0</strong></p><br>
                <p>Bronce: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 509 0 0</strong></p><br>
                <p>Kumicho Dragon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 527 0 0</strong></p><br>
                <p>Hand Cannon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 328 0 0</strong></p><br>
                <p>Directive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 603 0 0</strong></p><br>
            `;
            break;

        case "awp":
            contenido.innerHTML = `
                <p>Desert Hydra: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" class="copy" alt="Copy Icon"></button><strong>skin 819 0 0</strong></p><br>
                <p>Dragon Lore: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 344 0 0</strong></p><br>
                <p>The Prince: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 736 0 0</strong></p><br>
                <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1026 0 0</strong></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 803 0 0</strong></p><br>
                <p>Gugnir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 756 0 0</strong></p><br>
                <p>Wildfire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 917 0 0</strong></p><br>
                <p>Grafito: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 212 0 0</strong></p><br>
                <p>Aberración cromática: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1144 0 0</strong></p><br>
                <p>Medusa: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 446 0 0</strong></p><br>
                <p>Man-o'-war: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 395 0 0</strong></p><br>
                <p>Fever Dream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 640 0 0</strong></p><br>
                <p>Duality: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1222 0 0</strong></p><br>
                <p>Asimov: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 279 0 0</strong></p><br>
                <p>Exoesqueleto: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 975 0 0</strong></p><br>
                <p>Storm: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 51 0 0</strong></p><br>
                <p>Oni Taiji: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 662 0 0</strong></p><br>
                <p>Hyper Bestia: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 475 0 0</strong></p><br>
                <p>Nilo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1239 0 0</strong></p><br>
                <p>Acheron: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 788 0 0</strong></p><br>
                <p>Contaminada: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 887 0 0</strong></p><br>
                <p>POP: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1058 0 0</strong></p><br>
            `;
            break;
            
        // ... Otros casos
        default:
            contenido.innerHTML = "<p>Selecciona una opción para ver el contenido.</p>";
    }
}

function copiarContenido(boton) {
    var parrafo = boton.parentNode; // Obtener el párrafo padre del botón
    var contenidoStrong = parrafo.querySelector("strong");

    if (contenidoStrong) {
        var textoCopiar = contenidoStrong.innerText || contenidoStrong.textContent;

        // Crear un elemento de texto temporal para copiar el contenido
        var temporalInput = document.createElement("textarea");
        temporalInput.value = textoCopiar;

        // Agregar el elemento temporal al DOM
        document.body.appendChild(temporalInput);

        // Seleccionar y copiar el contenido del elemento temporal
        temporalInput.select();
        document.execCommand("copy");

        // Eliminar el elemento temporal
        document.body.removeChild(temporalInput);

        alert("Contenido copiado: " + textoCopiar);
    }
}

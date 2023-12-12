function cambiarContenido() {
    var seleccionArma = document.getElementById("menuDesplegableArma").value;
    var contenidoArma = document.getElementById("contenidoArma");
    var menuDesplegableOtro = document.getElementById("menuDesplegableOtro");
    var contenidoOtro = document.getElementById("contenidoOtro");

    // Oculta el contenido del otro menú
    contenidoOtro.innerHTML = "";

    // Muestra el contenido correspondiente al arma seleccionada
    switch (seleccionArma) {
        case "default":
            contenidoArma.innerHTML = "<p>Selecciona una opción para ver el contenido.</p>";
            break;
        // Agrega más casos según sea necesario
        case "ak47":
            contenidoArma.innerHTML = `
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
            contenidoArma.innerHTML = `
            <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 984 0 0</strong><img class="icono" src="skins/m4a1s/printstream.webp" alt="skin"></p><br>
            <p>Welcome to the jungle: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1001 0 0</strong><img class="icono" src="skins/m4a1s/jungle.webp" alt="skin"></p><br>
            <p>Player Two: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 946 0 0</strong><img class="icono" src="skins/m4a1s/playertwo.webp" alt="skin"></p><br>
            <p>Chantico's Fire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 548 0 0</strong><img class="icono" src="skins/m4a1s/fire.webp" alt="skin"></p><br>
            <p>Guardian: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 257 0 0</strong><img class="icono" src="skins/m4a1s/guardian.webp" alt="skin"></p><br>
            <p>Control Panel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 792 0 0</strong><img class="icono" src="skins/m4a1s/controlpanel.webp" alt="skin"></p><br>
            <p>Hyper Bestia: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 430 0 0</strong><img class="icono" src="skins/m4a1s/hyperbestia.webp" alt="skin"></p><br>
            <p>Mecha Industries: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 587 0 0</strong><img class="icono" src="skins/m4a1s/mecha.webp" alt="skin"></p><br>
            <p>Blue Phosphor: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1017 0 0</strong><img class="icono" src="skins/m4a1s/blue.webp" alt="skin"></p><br>
            <p>Hot Rod: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 445 0 0</strong><img class="icono" src="skins/m4a1s/rod.webp" alt="skin"></p><br>
            <p>Leaded Glass: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 681 0 0</strong><img class="icono" src="skins/m4a1s/glass.webp" alt="skin"></p><br>
            <p>Master Piece: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 321 0 0</strong><img class="icono" src="skins/m4a1s/master.webp" alt="skin"></p><br>
            <p>Danger: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1073 0 0</strong><img class="icono" src="skins/m4a1s/danger.webp" alt="skin"></p><br>
            <p>Golden Coil: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 497 0 0</strong><img class="icono" src="skins/m4a1s/golden.webp" alt="skin"></p><br>
            <p>Emphorosaur-S: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1223 0 0</strong><img class="icono" src="skins/m4a1s/rawr.webp" alt="skin"></p><br>
            `;
            break;

        case "m4a4":
            contenidoArma.innerHTML = `
                <p>Emperador: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 844 0 0</strong><img class="icono" src="skins/m4a4/emperor.webp" alt="skin"></p><br>
                <p>Howl: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 309 0 0</strong><img class="icono" src="skins/m4a4/howl.webp" alt="skin"></p><br>
                <p>Asimov: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 255 0 0</strong><img class="icono" src="skins/m4a4/asiimov.webp" alt="skin"></p><br>
                <p>Horus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1255 0 0</strong><img class="icono" src="skins/m4a4/horus.webp" alt="skin"></p><br>
                <p>Global Offensive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 993 0 0</strong><img class="icono" src="skins/m4a4/go.webp" alt="skin"></p><br>
                <p>Otaku: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1228 0 0</strong><img class="icono" src="skins/m4a4/otaku.webp" alt="skin"></p><br>
                <p>Coalition Gold: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1063 0 0</strong><img class="icono" src="skins/m4a4/gold.webp" alt="skin"></p><br>
                <p>Avispa: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 632 0 0</strong><img class="icono" src="skins/m4a4/avispa.webp" alt="skin"></p><br>
                <p>Hellfire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 664 0 0</strong><img class="icono" src="skins/m4a4/hell.webp" alt="skin"></p><br>
                <p>Spider Lily: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1097 0 0</strong><img class="icono" src="skins/m4a4/spider.webp" alt="skin"></p><br>
                <p>Evil Daimyo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 480 0 0</strong><img class="icono" src="skins/m4a4/evil.webp" alt="skin"></p><br>
                <p>Desolate Space: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 588 0 0</strong><img class="icono" src="skins/m4a4/space.webp" alt="skin"></p><br>
                <p>Poseidon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 449 0 0</strong><img class="icono" src="skins/m4a4/poseidon.webp" alt="skin"></p><br>
                <p>In Living Color: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1041 0 0</strong><img class="icono" src="skins/m4a4/color.webp" alt="skin"></p><br>
                <p>Paladin: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 512 0 0</strong><img class="icono" src="skins/m4a4/paladin.webp" alt="skin"></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 695 0 0</strong><img class="icono" src="skins/m4a4/neonoir.webp" alt="skin"></p><br>
                <p>Tooth Fairy: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 971 0 0</strong><img class="icono" src="skins/m4a4/tooth.webp" alt="skin"></p><br>
                <p>Dragon King: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 400 0 0</strong><img class="icono" src="skins/m4a4/dragon.webp" alt="skin"></p><br>
                `;
            break;

        case "usp":
            contenidoArma.innerHTML = `
                <p>Traitor: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1040 0 0</strong><img class="icono" src="skins/usp/traitor.webp" alt="skin"></p><br>
                <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1142 0 0</strong><img class="icono" src="skins/usp/printstream.webp" alt="skin"></p><br>
                <p>Monster: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 991 0 0</strong><img class="icono" src="skins/usp/monster.webp" alt="skin"></p><br>
                <p>Kill Confirmed: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 504 0 0</strong><img class="icono" src="skins/usp/kill.webp" alt="skin"></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 653 0 0</strong><img class="icono" src="skins/usp/neonoir.webp" alt="skin"></p><br>
                <p>Cortex: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 705 0 0</strong><img class="icono" src="skins/usp/cortex.webp" alt="skin"></p><br>
                <p>Hell: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1136 0 0</strong><img class="icono" src="skins/usp/hell.webp" alt="skin"></p><br>
                <p>Blueprint: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 657 0 0</strong><img class="icono" src="skins/usp/blue.webp" alt="skin"></p><br>
                <p>Blanca: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1065 0 0</strong><img class="icono" src="skins/usp/blanca.webp" alt="skin"></p><br>
                <p>Target: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1027 0 0</strong><img class="icono" src="skins/usp/target.webp" alt="skin"></p><br>
                <p>Road Rash: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 318 0 0</strong><img class="icono" src="skins/usp/rash.webp" alt="skin"></p><br>
                <p>Caiman: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 339 0 0</strong><img class="icono" src="skins/usp/caiman.webp" alt="skin"></p><br>
            `;
            break;

        case "glock":
            contenidoArma.innerHTML = `
            <p>Esmeralda: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1119 0 0</strong><img class="icono" src="skins/glock/esmeralda.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 38 0 0</strong><img class="icono" src="skins/glock/38.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 3 0 0</strong><img class="icono" src="skins/glock/3.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 159 0 0</strong><img class="icono" src="skins/glock/159.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 278 0 0</strong><img class="icono" src="skins/glock/278.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 353 0 0</strong><img class="icono" src="skins/glock/353.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 495 0 0</strong><img class="icono" src="skins/glock/495.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 586 0 0</strong><img class="icono" src="skins/glock/586.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 623 0 0</strong><img class="icono" src="skins/glock/623.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 680 0 0</strong><img class="icono" src="skins/glock/680.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 694 0 0</strong><img class="icono" src="skins/glock/694.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 789 0 0</strong><img class="icono" src="skins/glock/789.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 799 0 0</strong><img class="icono" src="skins/glock/799.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 957 0 0</strong><img class="icono" src="skins/glock/957.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 963 0 0</strong><img class="icono" src="skins/glock/963.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 988 0 0</strong><img class="icono" src="skins/glock/988.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1016 0 0</strong><img class="icono" src="skins/glock/1016.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1079 0 0</strong><img class="icono" src="skins/glock/1079.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 368 0 0</strong><img class="icono" src="skins/glock/367.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1100 0 0</strong><img class="icono" src="skins/glock/1100.png" alt="skin"></p><br>
            <p>Glock: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1240 0 0</strong><img class="icono" src="skins/glock/1240.png" alt="skin"></p><br>
            `;
            
            break;

        case "dk":
            contenidoArma.innerHTML = `
                <p>Printstream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 962 0 0</strong><img class="icono" src="skins/dk/printstream.webp" alt="skin"></p><br>
                <p>Blaze: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 37 0 0</strong><img class="icono" src="skins/dk/blaze.webp" alt="skin"></p><br>
                <p>Sunset Storm 1: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 469 0 0</strong><img class="icono" src="skins/dk/sunset1.webp" alt="skin"></p><br>
                <p>Sunset Storm 2: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 470 0 0</strong><img class="icono" src="skins/dk/sunset2.webp" alt="skin"></p><br>
                <p>Night Heist: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1006 0 0</strong><img class="icono" src="skins/dk/night.webp" alt="skin"></p><br>
                <p>Fennec: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 764 0 0</strong><img class="icono" src="skins/dk/fennec.webp" alt="skin"></p><br>
                <p>Ocean Drive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1090 0 0</strong><img class="icono" src="skins/dk/drive.webp" alt="skin"></p><br>
                <p>Esmeralda Jormungandr: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 757 0 0</strong><img class="icono" src="skins/dk/esmeralda.webp" alt="skin"></p><br>
                <p>Light Rail: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 841 0 0</strong><img class="icono" src="skins/dk/light.webp" alt="skin"></p><br>
                <p>Pilot: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 347 0 0</strong><img class="icono" src="skins/dk/pilot.webp" alt="skin"></p><br>
                <p>Code Red: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 711 0 0</strong><img class="icono" src="skins/dk/red.webp" alt="skin"></p><br>
                <p>Mecha Industrie: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 805 0 0</strong><img class="icono" src="skins/dk/mecha.webp" alt="skin"></p><br>
                <p>Storm: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 468 0 0</strong><img class="icono" src="skins/dk/storm.webp" alt="skin"></p><br>
                <p>Trigger Discipline: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1050 0 0</strong><img class="icono" src="skins/dk/rosita.webp" alt="skin"></p><br>
                <p>Bronce: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 509 0 0</strong><img class="icono" src="skins/dk/bronce.webp" alt="skin"></p><br>
                <p>Kumicho Dragon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 527 0 0</strong><img class="icono" src="skins/dk/kumicho.webp" alt="skin"></p><br>
                <p>Hand Cannon: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 328 0 0</strong><img class="icono" src="skins/dk/cannon.webp" alt="skin"></p><br>
                <p>Directive: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 603 0 0</strong><img class="icono" src="skins/dk/directive.webp" alt="skin"></p><br>
            `;
            break;

        case "awp":
            contenidoArma.innerHTML = `
                <p>Desert Hydra: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" class="copy" alt="Copy Icon"></button><strong>skin 819 0 0</strong><img class="icono" src="skins/awp/hydra.webp" alt="skin"></p><br>
                <p>Dragon Lore: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 344 0 0</strong><img class="icono" src="skins/awp/dragonlore.webp" alt="skin"></p><br>
                <p>The Prince: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 736 0 0</strong><img class="icono" src="skins/awp/prince.webp" alt="skin"></p><br>
                <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1026 0 0</strong><img class="icono" src="skins/awp/fade.webp" alt="skin"></p><br>
                <p>Neo-Noir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 803 0 0</strong><img class="icono" src="skins/awp/neonoir.webp" alt="skin"></p><br>
                <p>Gugnir: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 756 0 0</strong><img class="icono" src="skins/awp/gugnir.webp" alt="skin"></p><br>
                <p>Wildfire: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 917 0 0</strong><img class="icono" src="skins/awp/wildfire.webp" alt="skin"></p><br>
                <p>Grafito: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 212 0 0</strong><img class="icono" src="skins/awp/grafito.webp" alt="skin"></p><br>
                <p>Aberración cromática: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1144 0 0</strong><img class="icono" src="skins/awp/aberration.webp" alt="skin"></p><br>
                <p>Medusa: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 446 0 0</strong><img class="icono" src="skins/awp/medusa.webp" alt="skin"></p><br>
                <p>Man-o'-war: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 395 0 0</strong><img class="icono" src="skins/awp/war.webp" alt="skin"></p><br>
                <p>Fever Dream: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 640 0 0</strong><img class="icono" src="skins/awp/dream.webp" alt="skin"></p><br>
                <p>Duality: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1222 0 0</strong><img class="icono" src="skins/awp/duality.webp" alt="skin"></p><br>
                <p>Asimov: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 279 0 0</strong><img class="icono" src="skins/awp/asimov.webp" alt="skin"></p><br>
                <p>Exoesqueleto: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 975 0 0</strong><img class="icono" src="skins/awp/exo.webp" alt="skin"></p><br>
                <p>Lightning Strike: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 51 0 0</strong><img class="icono" src="skins/awp/storm.webp" alt="skin"></p><br>
                <p>Oni Taiji: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 662 0 0</strong><img class="icono" src="skins/awp/onitaiji.webp" alt="skin"></p><br>
                <p>Hyper Bestia: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 475 0 0</strong><img class="icono" src="skins/awp/hyperbestia.webp" alt="skin"></p><br>
                <p>Nilo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1239 0 0</strong><img class="icono" src="skins/awp/nilo.webp" alt="skin"></p><br>
                <p>Acheron: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 788 0 0</strong><img class="icono" src="skins/awp/acheron.webp" alt="skin"></p><br>
                <p>Contaminada: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 887 0 0</strong><img class="icono" src="skins/awp/contaminada.webp" alt="skin"></p><br>
                <p>POP: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1058 0 0</strong><img class="icono" src="skins/awp/pop.webp" alt="skin"></p><br>
            `;
            break;
        // Agrega más casos según sea necesario
        default:
            contenidoArma.innerHTML = "<p>Selecciona un arma</p>";
            break;
    }

    // Limpia el contenido del otro menú desplegable
    menuDesplegableOtro.value = "default";
}

function cambiarContenidoOtro() {
    var menuDesplegableOtro = document.getElementById("menuDesplegableOtro");
    var contenidoOtro = document.getElementById("contenidoOtro");
    var menuDesplegableArma = document.getElementById("menuDesplegableArma");
    var contenidoArma = document.getElementById("contenidoArma");

    // Oculta el contenido del otro menú
    contenidoArma.innerHTML = "";

    // Muestra el contenido correspondiente a la opción seleccionada en el segundo menú
    switch (menuDesplegableOtro.value) {
        case "default":
            contenidoOtro.innerHTML = "<p>Selecciona una opción para ver el contenido.</p>";
            break;
        // Agrega más casos según sea necesario
        case "talon":
            contenidoOtro.innerHTML = 
            `
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 853 0 0 523</strong><img class="icono" src="skins/fakas/talon/doppler.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 855 0 0 523</strong><img class="icono" src="skins/fakas/talon/855.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 854 0 0 523</strong><img class="icono" src="skins/fakas/talon/854.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 853 0 0 523</strong><img class="icono" src="skins/fakas/talon/853.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 852 0 0 523</strong><img class="icono" src="skins/fakas/talon/852.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 417 0 0 523</strong><img class="icono" src="skins/fakas/talon/417.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 416 0 0 523</strong><img class="icono" src="skins/fakas/talon/416.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 415 0 0 523</strong><img class="icono" src="skins/fakas/talon/415.png" alt="skin"></p><br>
                <p>Damascus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 858 0 0 523</strong><img class="icono" src="skins/fakas/talon/damascus.png" alt="skin"></p><br>
                <p>Slaughter: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 59 0 0 523</strong><img class="icono" src="skins/fakas/talon/slaughter.png" alt="skin"></p><br>
                <p>Stained: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 43 0 0 523</strong><img class="icono" src="skins/fakas/talon/stained.png" alt="skin"></p><br>
                <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 38 0 0 523</strong><img class="icono" src="skins/fakas/talon/fade.png" alt="skin"></p><br>
                <p>Marble Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 856 0 0 523</strong><img class="icono" src="skins/fakas/talon/marble.png" alt="skin"></p><br>
                <p>Ultravioleta: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 98 0 0 523</strong><img class="icono" src="skins/fakas/talon/ultravioleta.png" alt="skin"></p><br>
                <p>Blue Steel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 42 0 0 523</strong><img class="icono" src="skins/fakas/talon/steel.png" alt="skin"></p><br>
                <p>Tiger Tooth: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 409 0 0 523</strong><img class="icono" src="skins/fakas/talon/tiger.png" alt="skin"></p><br>
                <p>Blue Gem: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 44 185 0 523</strong><img class="icono" src="skins/fakas/talon/blue gem.png" alt="skin"></p><br>
            `;
            break;
        case "butterfly":
            contenidoOtro.innerHTML = 
            `
                <p>Lore: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1105 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/lore.png" alt="skin"></p><br>
                <p>Autotronic: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1115 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/autotronic.png" alt="skin"></p><br>
                <p>Marble Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 413 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/marble.png" alt="skin"></p><br>
                <p>Freehand: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 581 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/freehand.png" alt="skin"></p><br>
                <p>Ultravioleta: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 98 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/ultravioleta.png" alt="skin"></p><br>
                <p>Tiger Tooth: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 409 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/tiger.png" alt="skin"></p><br>
                <p>Blue Gem: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 44 652 0 515</strong><img class="icono" src="skins/fakas/butterfly/bluegem.png" alt="skin"></p><br>
                <p>Black: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 1110 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/black.png" alt="skin"></p><br>
                <p>Blue Steel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 42 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/blue.png" alt="skin"></p><br>
                <p>Slaughter: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 59 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/rojo.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 572 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/572.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 571 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/571.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 570 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/570.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 569 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/569.png" alt="skin"></p><br>
                <p>Doppler Esmeralda: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 568 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/568.png" alt="skin"></p><br>
                <p>Night: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 40 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/night.png" alt="skin"></p><br>
                <p>Rust Coat: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 414 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/coat.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 619 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/619.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 618 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/618.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 617 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/617.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 421 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/421.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 420 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/420.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 418 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/418.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 415 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/415.png" alt="skin"></p><br>
                <p>Damascus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 411 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/damascus.png" alt="skin"></p><br>
                <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 38 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/fade.png" alt="skin"></p><br>
                <p>Bright Water: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 579 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/water.png" alt="skin"></p><br>
                <p>Stained: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 43 0 0 515</strong><img class="icono" src="skins/fakas/butterfly/stained.png" alt="skin"></p><br>
            `;
            break;
        case "m9":
            contenidoOtro.innerHTML = `
                <p>Lore: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 562 0 0 508</strong><img class="icono" src="skins/fakas/m9/lore.png" alt="skin"></p><br>
                <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 38 0 0 508</strong><img class="icono" src="skins/fakas/m9/fade.png" alt="skin"></p><br>
                <p>Marble Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 413 0 0 508</strong><img class="icono" src="skins/fakas/m9/marble.png" alt="skin"></p><br>
                <p>Water: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 579 0 0 508</strong><img class="icono" src="skins/fakas/m9/water.png" alt="skin"></p><br>
                <p>Autotronic: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 577 0 0 508</strong><img class="icono" src="skins/fakas/m9/autotronic.png" alt="skin"></p><br>
                <p>Freehand: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 581 0 0 508</strong><img class="icono" src="skins/fakas/m9/freehand.png" alt="skin"></p><br>
                <p>Ultravioleta: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 98 0 0 508</strong><img class="icono" src="skins/fakas/m9/ultravioleta.png" alt="skin"></p><br>
                <p>Blue Steel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 42 0 0 508</strong><img class="icono" src="skins/fakas/m9/steel.png" alt="skin"></p><br>
                <p>Tiger Tooth: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 409 0 0 508</strong><img class="icono" src="skins/fakas/m9/tiger.png" alt="skin"></p><br>
                <p>Blue Gem: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 44 601 0 508</strong><img class="icono" src="skins/fakas/m9/bluegem.png" alt="skin"></p><br>
                <p>Black: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 567 0 0 508</strong><img class="icono" src="skins/fakas/m9/black.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 572 0 0 508</strong><img class="icono" src="skins/fakas/m9/572.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 571 0 0 508</strong><img class="icono" src="skins/fakas/m9/571.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 570 0 0 508</strong><img class="icono" src="skins/fakas/m9/570.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 569 0 0 508</strong><img class="icono" src="skins/fakas/m9/569.png" alt="skin"></p><br>
                <p>Doppler Esmeralda: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 568 0 0 508</strong><img class="icono" src="skins/fakas/m9/568.png" alt="skin"></p><br>
                <p>Night: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 40 0 0 508</strong><img class="icono" src="skins/fakas/m9/night.png" alt="skin"></p><br>
                <p>Rust Coat: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 414 0 0 508</strong><img class="icono" src="skins/fakas/m9/coat.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 421 0 0 508</strong><img class="icono" src="skins/fakas/m9/421.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 420 0 0 508</strong><img class="icono" src="skins/fakas/m9/420.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 419 0 0 508</strong><img class="icono" src="skins/fakas/m9/419.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 418 0 0 508</strong><img class="icono" src="skins/fakas/m9/418.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 417 0 0 508</strong><img class="icono" src="skins/fakas/m9/417.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 416 0 0 508</strong><img class="icono" src="skins/fakas/m9/416.png" alt="skin"></p><br>
                <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 415 0 0 508</strong><img class="icono" src="skins/fakas/m9/415.png" alt="skin"></p><br>
                <p>Damascus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 411 0 0 508</strong><img class="icono" src="skins/fakas/m9/damascus.png" alt="skin"></p><br>
                <p>Slaughter: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 59 0 0 508</strong><img class="icono" src="skins/fakas/m9/rojo.png" alt="skin"></p><br>
                <p>Stained: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 43 0 0 508</strong><img class="icono" src="skins/fakas/m9/stained.png" alt="skin"></p><br>
            `;
            break;
        case "karambit":
            contenidoOtro.innerHTML = `
            <p>Lore: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 561 0 0 507</strong><img class="icono" src="skins/fakas/karambit/Lore.png" alt="skin"></p><br>
            <p>Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 38 0 0 507</strong><img class="icono" src="skins/fakas/karambit/fade.png" alt="skin"></p><br>
            <p>Blue gem: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 44 387 0 507</strong><img class="icono" src="skins/fakas/karambit/bluegem.png" alt="skin"></p><br>
            <p>Marble Fade: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 413 0 0 507</strong><img class="icono" src="skins/fakas/karambit/marble.png" alt="skin"></p><br>
            <p>Autotronic: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 576 0 0 507</strong><img class="icono" src="skins/fakas/karambit/auto.png" alt="skin"></p><br>
            <p>Free hand: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 582 0 0 507</strong><img class="icono" src="skins/fakas/karambit/free.png" alt="skin"></p><br>
            <p>Ultravioleta: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 98 0 0 507</strong><img class="icono" src="skins/fakas/karambit/ultravioleta.png" alt="skin"></p><br>
            <p>Tiger Tooth: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 409 0 0 507</strong><img class="icono" src="skins/fakas/karambit/diente.png" alt="skin"></p><br>
            <p>Esmeralda: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 568 0 0 507</strong><img class="icono" src="skins/fakas/karambit/568.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 572 0 0 507</strong><img class="icono" src="skins/fakas/karambit/572.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 571 0 0 507</strong><img class="icono" src="skins/fakas/karambit/571.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 570 0 0 507</strong><img class="icono" src="skins/fakas/karambit/570.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 569 0 0 507</strong><img class="icono" src="skins/fakas/karambit/569.png" alt="skin"></p><br>
            <p>Slaughter: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 59 0 0 507</strong><img class="icono" src="skins/fakas/karambit/rojo.png" alt="skin"></p><br>
            <p>Damascus: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 410 0 0 507</strong><img class="icono" src="skins/fakas/karambit/damascus.png" alt="skin"></p><br>
            <p>Doppler Violeta: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 416 0 0 507</strong><img class="icono" src="skins/fakas/karambit/416.png" alt="skin"></p><br>
            <p>Doppler Rojo: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 415 0 0 507</strong><img class="icono" src="skins/fakas/karambit/415.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 421 0 0 507</strong><img class="icono" src="skins/fakas/karambit/421.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 420 0 0 507</strong><img class="icono" src="skins/fakas/karambit/420.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 419 0 0 507</strong><img class="icono" src="skins/fakas/karambit/419.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 418 0 0 507</strong><img class="icono" src="skins/fakas/karambit/418.png" alt="skin"></p><br>
            <p>Doppler: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 417 0 0 507</strong><img class="icono" src="skins/fakas/karambit/417.png" alt="skin"></p><br>
            <p>Blue Steel: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 414 0 0 507</strong><img class="icono" src="skins/fakas/karambit/steel.png" alt="skin"></p><br>
            <p>Stained: <button class="boton-copiar" onclick="copiarContenido(this)"><img src="icons/copy.svg" class="copy" alt="Copy Icon"></button><strong>skin 43 0 0 507</strong><img class="icono" src="skins/fakas/karambit/stained.png" alt="skin"></p><br>
            `;
            break;
        // Agrega más casos según sea necesario
        default:
            contenidoOtro.innerHTML = "<p>Selecciona una opción</p>";
            break;
    }

    // Limpia el contenido del otro menú desplegable
    menuDesplegableArma.value = "default";
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



fetch("./xml/podcast.xml")
    .then((response) => response.text())
    .then((data) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");

        let dato = "";
        const posts = xml.querySelectorAll("post");
        for(let i=0; i< posts.length;i++){
            let titulo = posts[i].getAttribute("titulo");
            let fecha = posts[i].getAttribute("fecha");
            let nombre = posts[i].querySelector("nombre").textContent;
            let introduccion = posts[i].querySelector("introduccion").textContent;
            let visualizaciones = posts[i].querySelector("num_visualizaciones").textContent;
            let comentarios = posts[i].querySelector("num_comentarios").textContent;
            let likes = posts[i].querySelector("num_megusta").textContent;
            let avatar = posts[i].querySelector("avatar").textContent;
            let imagen = posts[i].querySelector("imagen").textContent;

            const tarjeta = ` 
            <div class="ficha">
                <div class="fichaIzquierda"><img src="${imagen}" alt=""></div>
                <div class="fichaDerecha">
                    <div class="fichaUsuario">
                        <div class="usuarioFoto">
                            <img src="${avatar}" alt="" width="60px">
                        </div>
                        <div class="usuarioNombre">
                            <p>${nombre} <i class="fa-solid fa-crown" style="color: #000000;"></i></i></p>
                            <p>${fecha} · 2min.</p> 
                        </div>
                        <div class="usuarioMenu">
                            <i class="fa-solid fa-ellipsis-vertical" style="color: #000000;"></i>
                        </div>
                    </div>
                    <div class="fichaContenido">
                        <h4>${titulo}</h4>
                        <p>${introduccion}</p>
                    </div>
                    <div class="fichaComentarios">
                        <div class="fichaInteraciones">
                            <p>${visualizaciones} visualizaciones</p>
                            <p>${comentarios} comentarios</p>
                        </div>
                    <div class="fichaLikes">
                        <p>${likes} <i class="fa-regular fa-heart" style="color: #ff8800;"></i></p>
                    </div>
                </div>
            </div>
            </div>
            `;
            dato = dato + tarjeta;
        }

      

        
    
        document.querySelector(".container").innerHTML = dato

    })
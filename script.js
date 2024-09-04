document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");

    const sections = {
        sobre: `
            <section>
                <h2>Sobre a ETEC</h2>
                <p>A ETEC Presidente Vargas é uma instituição de ensino técnico que oferece uma variedade de cursos voltados para o desenvolvimento profissional e acadêmico dos seus alunos. Localizada em São Paulo, a ETEC é conhecida por sua qualidade de ensino e infraestrutura.</p>
            </section>
        `,
        cursos: `
            <section>
                <h2>Cursos Oferecidos</h2>
                <ul>
                    <li>Curso Técnico em Informática</li>
                    <li>Curso Técnico em Administração</li>
                    <li>Curso Técnico em Mecânica</li>
                    <li>Curso Técnico em Eletrônica</li>
                </ul>
            </section>
        `,
        contato: `
            <section>
                <h2>Contato</h2>
                <p>Para mais informações, entre em contato conosco:</p>
                <address>
                    <p>Endereço: Rua Silva Teles, 480 - Vila Maria, São Paulo - SP, 02130-000</p>
                    <p>Telefone: (11) 2957-7860</p>
                    <p>Email: <a href="mailto:etecpresidentevargas@etec.sp.gov.br">etecpresidentevargas@etec.sp.gov.br</a></p>
                </address>
            </section>
        `
    };

    function loadContent(contentKey) {
        if (sections[contentKey]) {
            contentDiv.innerHTML = sections[contentKey];
        } else {
            contentDiv.innerHTML = "<p>Conteúdo não encontrado.</p>";
        }
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const contentKey = this.getAttribute("data-content");
            loadContent(contentKey);
        });
    });

    // Carregar a seção inicial
    loadContent("sobre");
});
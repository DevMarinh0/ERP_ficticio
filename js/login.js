document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      // SweetAlert para feedback do login
      if (usuario === "admin" && senha === "123") {
        Swal.fire({
          icon: "success",
          title: "Bem-vindo!",
          text: "Login realizado com sucesso",
          timer: 1700,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "../index.html"; // Redireciona após o login
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro ao entrar",
          text: "Usuário ou senha inválidos"
        });
      }
    });
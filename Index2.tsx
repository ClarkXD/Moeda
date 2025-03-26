import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  const [peso, setPeso] = useState<number | "">("");
  const [altura, setAltura] = useState<number | "">("");
  const [imc, setImc] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Preencha todos os campos!");
      return;
    }

    const alturaMetros = Number(altura) / 100;
    const imcCalculado = Number((Number(peso) / (alturaMetros * alturaMetros)).toFixed(2));

    setImc(imcCalculado);
    setStatus(interpretarIMC(imcCalculado));
  };

  const interpretarIMC = (imc: number): string => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade Grau I";
    if (imc < 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Calculadora de IMC</h2>
      <div>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value ? Number(e.target.value) : "")}
          style={styles.input}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value ? Number(e.target.value) : "")}
          style={styles.input}
        />
      </div>
      <button onClick={calcularIMC} style={styles.button}>
        Calcular IMC
      </button>

      {imc !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.result}>Seu IMC: {imc}</h3>
          <h4 style={styles.status}>Status: {status}</h4>
        </div>
      )}
    </div>
  );
};

// Estilos CSS em um objeto JavaScript
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "auto",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#333",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  resultContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
  },
  result: {
    color: "#007BFF",
  },
  status: {
    color: "#333",
    fontWeight: "bold",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

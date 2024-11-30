### **Inspiration**  
Inspired by the growing interest in quantum computing, **QuantX** aims to provide an accessible, interactive platform for learning quantum gate operations and simulating qubit behavior, without needing actual quantum hardware.

### **What it does**  
**QuantX** allows users to select quantum gates (Hadamard, Pauli-X, Y, Z) for two qubits, simulate the resulting quantum state, and view the measurement probabilities of the four possible outcomes (`00`, `01`, `10`, `11`).

### **How we built it**  
Built with **React** for the frontend, **Next.js** for the backend, and **TailwindCSS** for styling, the quantum logic was simplified into a classical simulation of quantum gates using predefined effect values. A Next.js API handles the circuit simulation.

### **Challenges we ran into**  
Simulating true quantum behavior on a classical computer proved challenging. We had to simplify the model and rely on probabilistic approximations, leading to a less accurate, though still educational, simulation.

### **Accomplishments that we're proud of**  
Successfully building an interactive, user-friendly frontend that allows real-time circuit simulation. Integrating the simulation logic with a seamless API and enabling users to explore quantum mechanics at their own pace.

### **What we learned**  
We gained hands-on experience in quantum gate theory, simplified quantum circuit simulation, and developed a deeper understanding of the challenges of simulating quantum systems on classical hardware.

### **What's next for QuantX**  
We plan to expand the project by adding more gates (like controlled operations), improving simulation accuracy, and potentially integrating with real quantum computers via IBMQ or similar platforms for a more realistic experience.

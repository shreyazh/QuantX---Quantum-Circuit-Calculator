# **QuantX**

**QuantX** is an interactive quantum circuit simulator that allows users to experiment with quantum gates and visualize the resulting measurement probabilities. Designed as an educational tool, it helps users explore quantum computing concepts in a simplified, accessible manner.<br><br>
[Visit main site](https://v0-quant-x.vercel.app)
---

## **Inspiration**
As quantum computing gains momentum, **QuantX** was created to provide a hands-on learning platform. The goal is to make quantum mechanics more approachable through an interactive simulator that runs entirely in the browser.

---

## **What it does**
**QuantX** enables users to:
- Select quantum gates (Hadamard, Pauli-X, Y, Z) for two qubits.
- Simulate the quantum circuit and view measurement outcomes.
- Visualize the resulting measurement probabilities for states (`|00⟩`, `|01⟩`, `|10⟩`, `|11⟩`).

---

## **How we built it**
**QuantX** was built using the following technologies:
- **Frontend**: React (with `useState` for state management), **Next.js** for server-side rendering, and **TailwindCSS** for styling.
- **Backend**: The simulation logic is powered by a custom Next.js API that processes user inputs and returns simulated quantum circuit results.
- **Quantum Simulation**: The quantum gates are modeled through classical approximations of quantum behavior.

---

## **Challenges we ran into**
Simulating actual quantum behavior on a classical system posed significant challenges. We had to simplify the simulation and relied on probabilistic approximations. This led to less accurate results but allowed for a functional and educational tool.

---

## **Accomplishments that we're proud of**
- Developed an easy-to-use interface for interacting with quantum circuits.
- Created a fully integrated frontend and backend solution for simulating quantum circuits.
- Empowered users to learn the basics of quantum gates and measurement outcomes through real-time interaction.

---

## **What we learned**
- A deeper understanding of quantum gates and their effects on qubits.
- The challenge of simulating quantum mechanics on classical systems and the need for approximation.
- Gained experience building a full-stack web application with **Next.js**, **React**, and **TailwindCSS**.

---

## **What's next for QuantX**
- **More Gates**: Add more advanced quantum gates like controlled operations (`CX`, `CCX`).
- **Improved Simulation**: Enhance the accuracy of the quantum circuit simulation.
- **Real Quantum Backends**: Integrate with actual quantum computing platforms like IBMQ for more realistic simulations.
- **Visualization**: Add better visualizations of quantum states, such as Bloch spheres or probability graphs.

---

## **Tech Stack**
- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Next.js API routes (for simulating quantum circuits)
- **Simulation**: Classical approximation of quantum gates

---

## **Installation**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to get started:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/QuantX.git
   cd QuantX
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## **Folder Structure**
```plaintext
QuantX/
├── app/
│   ├── api/
│   │   └── quantum/
│   │       └── route.ts       # Quantum simulation API logic
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   └── QuantumCircuit.tsx     # Main frontend component
├── public/                    # Static assets
├── styles/                    # Styling with TailwindCSS
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

---

## **API Reference**

### **Endpoint**: `/api/quantum`  
**Method**: `POST`

**Request Body**:
```json
{
  "gate1": "h",
  "gate2": "x"
}
```

**Response**:
```json
{
  "results": {
    "00": 0.0,
    "01": 0.5,
    "10": 0.5,
    "11": 0.0
  }
}
```

---

## **Contributing**
Feel free to fork this repository, submit issues, and create pull requests.  
To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**
- Inspired by the work of quantum computing pioneers and frameworks like **Qiskit** and **IBM Quantum**.
- Built with ❤️ by [Your Name](https://github.com/shreyazh).

---

Let me know if you'd like to make any modifications!

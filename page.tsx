'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuantumCircuit() {
  const [gate1, setGate1] = useState('h')
  const [gate2, setGate2] = useState('h')
  const [results, setResults] = useState<string | null>(null)

  const runCircuit = async () => {
    const response = await fetch('/api/quantum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gate1, gate2 }),
    })
    const data = await response.json()
    setResults(JSON.stringify(data.results, null, 2))
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Quantum Circuit Simulator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gate1">Qubit 1 Gate</Label>
                <Select value={gate1} onValueChange={setGate1}>
                  <SelectTrigger id="gate1">
                    <SelectValue placeholder="Select gate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="h">Hadamard (H)</SelectItem>
                    <SelectItem value="x">Pauli-X</SelectItem>
                    <SelectItem value="y">Pauli-Y</SelectItem>
                    <SelectItem value="z">Pauli-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="gate2">Qubit 2 Gate</Label>
                <Select value={gate2} onValueChange={setGate2}>
                  <SelectTrigger id="gate2">
                    <SelectValue placeholder="Select gate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="h">Hadamard (H)</SelectItem>
                    <SelectItem value="x">Pauli-X</SelectItem>
                    <SelectItem value="y">Pauli-Y</SelectItem>
                    <SelectItem value="z">Pauli-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={runCircuit}>Run Circuit</Button>
            {results && (
              <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                {results}
              </pre>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


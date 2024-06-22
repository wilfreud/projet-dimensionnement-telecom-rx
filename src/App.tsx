import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";

function App() {
  const { control, formState } = useForm();

  return (
    <main className="w-screen h-screen p-8">
      {/* Header */}
      <div className="w-full">
        <h1 className="text-[32px] font-bold text-center">
          Dimensionnement Réseau GSM
        </h1>
      </div>

      <div className="">
        <h1 className="text-[24px] font-bold">Définition de la zone</h1>

        <div className="w-fit flex gap-4">
          <Label>Zone</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rurale">Rurale</SelectItem>
              <SelectItem value="rrbaine">Urbaine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-fit flex gap-4">
          <Label>Nom de la zone</Label>
          <Input />
        </div>

        <div className="w-fit flex gap-4">
          <Label>Position des antennes</Label>
          <Input type="number" placeholder="Latitude" />
          <Input type="number" placeholder="Longitude" />
        </div>
      </div>

      {/* Affectation des frequences */}
      <div className="w-full mt-8 flex flex-col gap-5">
        <h1 className="text-[24px] font-bold">Affectation des fréquences</h1>

        <div className=" gap-2 items-center text-lg">
          <Label htmlFor="motif">Motif: </Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Motif" />
            </SelectTrigger>
            <SelectContent id="motif">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Dimensionnment des reseaux */}
      <div className="w-full mt-8 flex flex-col gap-5">
        {/* Part 1: Input */}
        <div className="flex gap-8">
          <div className="flex items-center gap-4">
            <Label className="flex-1">Zone de couverture (km²)</Label>
            <Input type="number" min={0} />
          </div>
          <div className="flex items-center gap-4">
            <Label>Taille de la cellule (km²)</Label>
            <Input type="number" min={0} />
          </div>
        </div>

        {/* Part 2: Results */}
        <div>
          <h1 className="text-[24px] font-bold">Dimensionnment du réseau</h1>
          <p>Nombre de cellules: {10}</p>
          <p>Nombre de clusters: {4}</p>
        </div>
      </div>

      {/* Analyse de capacité */}
      <div className="w-autow-full">
        <h1 className="text-[24px] font-bold">Analyse de capacité</h1>

        <div className="flex items-center gap-4 w-fit">
          <Label className="">Nombre d'utilisateurs</Label>
          <Input type="number" min={0} />
        </div>

        <div className="flex items-center gap-4 w-fit">
          <Label>Bande passante / utilisateur (Mbps)</Label>
          <Input type="number" min={0} />
        </div>

        <div className="flex items-center gap-4 w-fit">
          <Label>Bande passante totale disponible (Mbps)</Label>
          <Input type="number" min={0} />
        </div>
      </div>

      {/* Resultats Analyse de capacite */}
      <div className="w-autow-full">
        <h1 className="text-[24px] font-bold">
          Resultats de l'Analyse de Capacité
        </h1>
        <p>Bande passante: {0}</p>
        <p>Capacité du réseau: insuffisante</p>
        <p>Rapport de capacité: {0.05}</p>
      </div>
    </main>
  );
}

export default App;

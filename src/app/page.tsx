import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen flex items-center justify-center">

      <Input.Root>
        <Input.Component label="CPF" />
      </Input.Root>
    </main>
  )
}

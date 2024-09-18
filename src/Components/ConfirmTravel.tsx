import { Mail, User, X } from 'lucide-react'

interface ConfirmTravelModalProps {
  closeConfirmTravelModal: () => void
}

export function ConfirmTravelModal({
  closeConfirmTravelModal,
}: ConfirmTravelModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmTravelModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left mt-4">
            Para concluir a criação da viagem para{' '}
            <strong className="text-white"> Florianópolis, Brasil</strong> nas
            datas de{' '}
            <strong className="text-white"> 16 a 27 de Agosto de 2024</strong>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
        >
          Confirmar criação de viagem
        </button>
      </div>
    </div>
  )
}

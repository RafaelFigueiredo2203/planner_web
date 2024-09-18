import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from 'lucide-react'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { ConfirmTravelModal } from './Components/ConfirmTravel'
import { InviteModal } from './Components/InviteModal'

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isGuestConfirmTravelModalOpen, setIsGuestConfirmTravelModalOpen] =
    useState(false)

  console.log(isGuestConfirmTravelModalOpen)

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }

  function openGuestModal() {
    setIsGuestModalOpen(true)
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none disabled:cursor-not-allowed"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={() => setIsGuestInputOpen(false)}
                className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 />
              </button>
            ) : (
              <button
                onClick={openGuestInput}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
              >
                Continuar <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestModal}
                className="flex flex-1 items-center gap-2 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1 ">
                  Quem estará na viagem?
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                onClick={() => setIsGuestConfirmTravelModalOpen(true)}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
              >
                Confirmar viagem <ArrowRight className="size-5" />
              </button>
            </div>
          )}

          {isGuestConfirmTravelModalOpen && (
            <ConfirmTravelModal
              closeConfirmTravelModal={() =>
                setIsGuestConfirmTravelModalOpen(false)
              }
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso{' '}
          </a>
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            {' '}
            políticas de privacidade.
          </a>
        </p>
      </div>
      {isGuestModalOpen && <InviteModal closeGuestModal={closeGuestModal} />}

      <ToastContainer />
    </div>
  )
}

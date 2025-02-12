import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

interface InviteModalProps {
  closeGuestModal: () => void
}

export function InviteModal({ closeGuestModal }: InviteModalProps) {
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  const notify = () =>
    toast.warning('E-mail já foi adicionado !', { theme: 'dark' })

  function addNewEmailToinvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return notify()
    }

    setEmailsToInvite([...emailsToInvite, email])
  }
  console.log(emailsToInvite)

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button">
                  <X
                    onClick={() => removeEmailFromInvites(email)}
                    className="size-5 text-zinc-400"
                  />
                </button>
              </div>
            )
          })}
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToinvite}
          action=""
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
          >
            Convidar <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

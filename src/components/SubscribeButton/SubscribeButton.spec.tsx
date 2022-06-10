import { render, screen, fireEvent } from "@testing-library/react"
import { useRouter } from "next/router"

import { signIn, useSession } from "next-auth/client"

import { SubscribeButton } from "."

jest.mock("next-auth/client")
jest.mock("next/router")

describe("SubscribeButton component", () => {
  it("renders correctly when user is no logged in", () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)
    expect(screen.getByText("Subscribe now")).toBeInTheDocument()
  })

  it("redirects user to Sign In when not authenticated", () => {
    const signInMocked = jest.mocked(signIn)
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText("Subscribe now")
    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it("redirects to Posts when user already has a subscription", () => {
    const pushMock = jest.fn()
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: "John Doe",
          email: "jonndoe@example.com",
          image: "fake-img",
        },
        activeSubscription: "fake-sub",
      },
      false,
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText("Subscribe now")
    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalled()
  })
})

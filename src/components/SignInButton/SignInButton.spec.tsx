import { render, screen } from "@testing-library/react"

import { useSession } from "next-auth/client"

import { SignInButton } from "."

jest.mock("next-auth/client")

describe("SignInButton component", () => {
  it("renders correctly when user is no logged in", () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)
    expect(screen.getByText("Sign in with Github")).toBeInTheDocument()
  })

  it("renders correctly when user is logged in", () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: "John Doe",
          email: "jonndoe@example.com",
          image: "fake-img",
        },
      },
      false,
    ])

    render(<SignInButton />)
    expect(screen.getByText("John Doe")).toBeInTheDocument()
  })
})

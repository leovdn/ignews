import { render, screen } from "@testing-library/react"
import { getSession } from "next-auth/client"
import Post, { getServerSideProps } from "../../pages/posts/[slug]"

const post = {
  slug: "my-new-post",
  title: "My New Post",
  content: "<p>Post content</p>",
  updatedAt: "10 de junho",
}

jest.mock("next-auth/client")

describe("Post page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />)

    expect(screen.getByText("My New Post")).toBeInTheDocument()
    expect(screen.getByText("Post content")).toBeInTheDocument()
  })

  it("redirects user if no sub is found", async () => {
    const getSessionMocked = jest.mocked(getSession)
    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {
        slug: "my-new-post",
      },
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/",
        }),
      })
    )
  })
})

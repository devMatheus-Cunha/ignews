// jest
import { render, screen } from "@testing-library/react";

// components
import { Header } from ".";

// mock
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);
    screen.logTestingPlaygroundURL();

    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});

import { useSession } from "next-auth/react";
import { useAuthentication } from "../useIsAuthenticated"; // Adjust the import path accordingly
import { renderHook } from '@testing-library/react'

// Mock the useSession hook from next-auth/react
jest.mock("next-auth/react", () => ({
  useSession: jest.fn()
}));

describe("useAuthentication", () => {
  it("should return isAuthenticated as true when session status is authenticated", () => {
    // Mock the session data to mimic an authenticated session
    (useSession as jest.Mock).mockReturnValue({ status: "authenticated" });

    // Render our hook
    const { result } = renderHook(() => useAuthentication());

    expect(result.current.isAuthenticated).toBeTruthy();
    expect(result.current.session).toEqual({ status: "authenticated" });
  });

  it("should return isAuthenticated as false when session status is not authenticated", () => {
    // Mock the session data to mimic a non-authenticated session
    (useSession as jest.Mock).mockReturnValue({ status: "not-authenticated" }); // Example status

    // Render our hook
    const { result } = renderHook(() => useAuthentication());

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.session).toEqual({ status: "not-authenticated" });
  });
});

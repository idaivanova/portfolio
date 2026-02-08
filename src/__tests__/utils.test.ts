import { describe, it, expect } from "bun:test";
import { cn } from "../lib/utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    const result = cn("class1", "class2");
    expect(result).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    const result = cn("base", true && "conditional", false && "hidden");
    expect(result).toBe("base conditional");
  });

  it("should merge tailwind classes properly", () => {
    const result = cn("px-2 py-1", "px-4");
    expect(result).toBe("py-1 px-4");
  });
});

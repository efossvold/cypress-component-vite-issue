import Footer from "./Footer";

describe("Footer", () => {
  it("should mount", () => {
    cy.mount(<Footer />);
    cy.get("footer").contains("hello world");
  });
});

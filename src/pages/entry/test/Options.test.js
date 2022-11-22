import { render, screen } from "@testing-library/react";

import { Options } from "../Options";
import { ScoopOption } from "../ScoopOption";

test("displays image for each scoop option from server", () => {
  render(<Options optionType={"scoops"} />);

  //   find images
  const scoopImages = screen.getByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.compareDocumentPosition((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

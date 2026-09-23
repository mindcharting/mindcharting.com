import { describe, expect, test } from "bun:test";

import { getFirstImageSrc } from "./get-first-image-src";

describe("getFirstImageSrc", () => {
  test("returns the src of the first image in the html", () => {
    const html = `
      <p>Some text</p>
      <img class="gatsby-resp-image-image" src="/static/abc123/photo.png" alt="alt text" />
      <img src="/static/def456/second.png" />
    `;

    expect(getFirstImageSrc(html)).toBe("/static/abc123/photo.png");
  });

  test("returns undefined when there is no image", () => {
    expect(getFirstImageSrc("<p>No images here</p>")).toBeUndefined();
  });
});

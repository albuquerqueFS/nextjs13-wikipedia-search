import React from "react";

export default async function getWikiResults(searchTerm: string) {
  try {
    const searchParams = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: searchTerm,
      gsrlimit: "20",
      prop: "pageimages|extracts",
      exchars: "100",
      exintro: "true",
      explaintext: "true",
      exlimit: "max",
      format: "json",
      origin: "*",
    });
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?${searchParams}`
    );

    if (!response.ok) throw new Error("Failed to fetch from wiki api");

    return response.json();
  } catch (err) {
    console.log(err);
  }
}

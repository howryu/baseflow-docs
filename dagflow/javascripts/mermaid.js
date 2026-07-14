mermaid.initialize({ startOnLoad: false });

document$.subscribe(() => {
  mermaid.run({ nodes: document.querySelectorAll(".mermaid") });
});

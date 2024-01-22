# Syntax highlighting for TLA<sup>+</sup> in [highlightjs][]

![badge](https://github.com/konnov/tlaplus-highlightjs/actions/workflows/ci.yml/badge.svg)

This repository contains a syntax highlighting file for TLA<sup>+</sup> with
[highlightjs][]. You can use it to highlight TLA<sup>+</sup> snippets in your
blog posts. You can check how it looks like in my blog called
[Protocols Made Fun][], which runs on [Github pages][].

## How to use it?

You have to load [highlightjs][] and the syntax file as JavaScript somewhere in
your blog HTML header. For instance, in Jekyll, I am extending the file
`_includes/custom-head.html` (which is a copy of the respective file from the
[minima][] theme) with the following lines:

```html
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/isbl-editor-light.css"></link>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script
    src="https://cdn.jsdelivr.net/gh/konnov/tlaplus-highlightjs/tlaplus-minified.js">
  </script>
  <script>hljs.highlightAll();</script>
```

Once `highlightjs` and `tlaplus-highlightjs` are properly loaded, you can simply
type TLA<sup>+</sup> in Markdown:

<pre>
```tla
---- MODULE Counter ----
VARIABLE x
Init == x = 0
Next == x' = x + 1
====
```
</pre>


[highlightjs]: https://highlightjs.org/
[Protocols Made Fun]: https://konnov.github.io/protocols-made-fun/
[minima]: https://github.com/jekyll/minima
[Github pages]: https://pages.github.com/

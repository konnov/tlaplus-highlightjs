/*
Language: TLA+
Requires:
Author: Igor Konnov [konnov.github.io], 2024
Contributors:
Description: Syntax highlighting for TLA+
Website: https://github.com/konnov/tlaplus-highlightjs
License: MIT
*/
(() => {
  function tlaHljs(hljs) {
    const n = {
      keyword: [
        'ACTION', 'ASSUME', 'ASSUMPTION', 'AXIOM', 'BY', 'CASE', 'CONSTANT',
        'CONSTANTS', 'DEF', 'DEFINE', 'DEFS', 'DOMAIN', 'ELSE', 'ENABLED',
        'EXCEPT', 'EXTENDS', 'HAVE', 'HIDE', 'IF', 'IN', 'INSTANCE', 'LAMBDA',
        'LEMMA', 'LET', 'LOCAL', 'MODULE', 'NEW', 'OBVIOUS', 'OMITTED', 'OTHER',
        'PICK', 'PROOF', 'PROPOSITION', 'PROOF', 'PROPOSITION', 'PROVE', 'QED',
        'RECURSIVE', 'STATE', 'SUBSET', 'SUFFICES', 'TAKE', 'TEMPORAL',
        'THEN', 'THEOREM', 'UNCHANGED', 'UNION', 'USE', 'VARIABLE', 'VARIABLES',
        'WITH', 'WITNESS'
      ],
      literal: [
        'FALSE', 'TRUE', 'BOOLEAN', 'STRING', 'Int', 'Nat', 'Real', 'Seq',
      ],
      punctuation: [ ',', '(', ')', '{', '}', '[', ']', ']_', '>>_' ],
    };

    return {
      name: 'TLA+',
      case_insensitive: false,
      keywords: n,
      contains: [
        {
          scope: 'string',
          begin: '"',
          end: '"'
        },
        hljs.COMMENT('\\\\\\*', '$'),
        hljs.COMMENT('\\(\\*', '\\*\\)'),
        {
          className: 'symbol',
          begin: /\\[A-Za-z]+|\\|\/|WF_|SF_|'|\|->|\[\]|\(\+\)|\(-\)|\(\\X\)|\(\/\)|\(\.\)|&|\||@@|##|\$|\?|\!|~|~>|<=>|=>|>=|<=|>>|<<|<:|>|<|:=|==|=|\/=|#=|\.|\*|\+|-|\/|%|::=|:|:>|\^\^|\^\+|\^\*|\^\#|\^/,
        },
      ],
    };
  }
  hljs.registerLanguage('tlaplus', tlaHljs);
  hljs.registerLanguage('tla', tlaHljs);
})();

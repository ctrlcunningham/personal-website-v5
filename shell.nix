{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    prisma_6
    pnpm_10
    nodejs_25
    openssl_3
    vscode-langservers-extracted
    typescript
  ];
  shellHook = ''
export PRISMA_QUERY_ENGINE_LIBRARY=${pkgs.prisma-engines_6}/lib/libquery_engine.node
export PRISMA_QUERY_ENGINE_BINARY=${pkgs.prisma-engines_6}/bin/query-engine
export PRISMA_SCHEMA_ENGINE_BINARY=${pkgs.prisma-engines_6}/bin/schema-engine
'';
}

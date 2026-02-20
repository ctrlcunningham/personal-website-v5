{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    pnpm_10
    nodejs_25
    vscode-langservers-extracted
    typescript
  ];
}
